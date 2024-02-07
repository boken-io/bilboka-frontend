import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import AppleProvider from 'next-auth/providers/apple';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import CredentialsProvider from 'next-auth/providers/credentials';

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
      name: 'webauthn',
      credentials: {},
      authorize(cred, req) {
        if (cred.provider !== 'corbado') return null;

        // Get the token from the cookie
        var cbo_short_session = req.headers.cookie
          .split('; ')
          .find((row) => row.startsWith('cbo_short_session'));
        var token = cbo_short_session.split('=')[1];

        // Get the JWKS URL from the project ID
        var issuer = 'https://' + projectID + '.frontendapi.corbado.io';
        var jwksUrl = issuer + '/.well-known/jwks';

        // Initialize the JWKS client
        const JWKS = jose.createRemoteJWKSet(new URL(jwksUrl), {
          cacheMaxAge: 10 * 60 * 1000
        });
        const options = {
          issuer: issuer
        };
        try {
          // Verify the token
          const { payload } = await jose.jwtVerify(token, JWKS, options);
          if (payload.iss === issuer) {
            //
            //Next steps: Load data from database here to always have all the data available in the session
            return { email: payload.email, name: payload.name, image: null };
          } else {
            console.log('issuer not valid');
          }
        } catch (e) {
          console.log('Error: ', e);
        }
      }
    })
  ],
  pages: {
    signIn: '/login'
  }
  // https://nextjs.org/learn/dashboard-app/adding-authentication
  // callbacks: {
  //   authorized({ auth, request: { nextUrl } }) {
  //     const isLoggedIn = !!auth?.user;
  //     const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
  //     if (isOnDashboard) {
  //       if (isLoggedIn) return true;
  //       return false; // Redirect unauthenticated users to login page
  //     } else if (isLoggedIn) {
  //       return Response.redirect(new URL('/dashboard', nextUrl));
  //     }
  //     return true;
  //   },
  // }
});
