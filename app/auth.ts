import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import AppleProvider from 'next-auth/providers/apple';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';

export const {
  handlers: { GET, POST },
  auth
} = NextAuth({
  providers: [GitHub, AppleProvider, GoogleProvider, FacebookProvider],
  pages: {
    signIn: '/sign-in'
  }
});
