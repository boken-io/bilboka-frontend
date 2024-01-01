import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import AppleProvider from 'next-auth/providers/apple';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';

export const {
  handlers: { GET, POST },
  auth
} = NextAuth({
  providers: [
    GitHub,
    AppleProvider,
    GoogleProvider,
    FacebookProvider({
      idToken: true,
      clientId: process.env.AUTH_FACEBOOK_ID,
      clientSecret: process.env.AUTH_FACEBOOK_SECRET,
      authorization: {
        url: 'https://www.facebook.com/v11.0/dialog/oauth',
        params: {
          client_id: process.env.AUTH_FACEBOOK_ID,
          scope: 'openid email',
          response_type: 'code'
        }
      },
      token: {
        url: 'https://graph.facebook.com/oauth/access_token',
        async request(context) {
          const url =
            `https://graph.facebook.com/oauth/access_token` +
            `?code=${context.params.code}` +
            `&client_id=${context.provider.clientId}` +
            `&redirect_uri=${context.provider.callbackUrl}` +
            `&client_secret=${context.provider.clientSecret}`;
          const response = await fetch(url);
          const tokens = await response.json();
          return { tokens };
        }
      }
    })
  ],
  pages: {
    signIn: '/sign-in'
  }
});
