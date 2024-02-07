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
      name: 'Passkeys',
      id: 'corbado',
      credentials: {},
      async authorize(credentials, req) {
        console.log('credentials: ' + JSON.stringify(credentials));
        console.log('req: ' + JSON.stringify(req));
        console.log('req.headers: ' + JSON.stringify(req.headers));

        return null;
        // // Get the token from the cookie
        // var cbo_short_session = req.headers.cookie
        //   .split('; ')
        //   .find((row) => row.startsWith('cbo_short_session'));
        // var token = cbo_short_session.split('=')[1];

        // // Get the JWKS URL from the project ID
        // var issuer = 'https://' + process.env.NEXT_PUBLIC_CORBADO_PROJECT_ID + '.frontendapi.corbado.io';
        // var jwksUrl = issuer + '/.well-known/jwks';

        // // Initialize the JWKS client
        // const JWKS = jose.createRemoteJWKSet(new URL(jwksUrl), {
        //   cacheMaxAge: 10 * 60 * 1000
        // });
        // const options = {
        //   issuer: issuer
        // };

        // const { payload } = await jose.jwtVerify(token, JWKS, options);
        // if (payload.iss !== issuer) {
        //   return null; // Return null if conditions are not met
        // }

        // return { email: payload.email, name: payload.name, image: null };
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
