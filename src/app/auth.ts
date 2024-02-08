import NextAuth, { User } from 'next-auth';
import GitHub from 'next-auth/providers/github';
import AppleProvider from 'next-auth/providers/apple';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import CredentialsProvider from 'next-auth/providers/credentials';
import * as jose from 'jose';

type CorbadoInput = { callbackUrl: string; cbo_short_session: string };

export const {
  handlers: { GET, POST },
  auth
} = NextAuth({
  providers: [
    GitHub,
    AppleProvider,
    GoogleProvider,
    FacebookProvider,
    CredentialsProvider({
      name: 'Passkeys',
      id: 'corbado',
      credentials: {},
      async authorize(
        credentials: Partial<Record<never, unknown>>,
        req: Request
      ): Promise<User | null> {
        let data = credentials as CorbadoInput;
        let token = data.cbo_short_session;

        // Get the JWKS URL from the project ID
        var issuer = `https://${process.env.NEXT_PUBLIC_CORBADO_PROJECT_ID}.frontendapi.corbado.io`;
        var jwksUrl = issuer + '/.well-known/jwks';

        // Initialize the JWKS client
        const JWKS = jose.createRemoteJWKSet(new URL(jwksUrl), {
          cacheMaxAge: 10 * 60 * 1000
        });
        const options = {
          issuer: issuer
        };

        const { payload } = await jose.jwtVerify(token, JWKS, options);
        console.log(JSON.stringify(payload, null, 2));

        if (payload.iss !== issuer) {
          return null;
        }

        return {
          id: payload.sub as string,
          email: payload.email as string,
          name: payload.name as string,
          image: null as null
        };
      }
    })
  ],
  pages: {
    signIn: '/login'
  }
});
