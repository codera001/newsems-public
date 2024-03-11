// import { NextAuthOptions } from "../../../../lib/auth";
// import NextAuth from "next-auth/next";

// export default const handler = () => NextAuth(NextAuthOptions);
// // export { handler as GET, handler as POST };
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";
import FacebookProvider from "next-auth/providers/facebook";

export const NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "511064560821-vvsmbo0bca01l5mg2d6p8pqeqghva2m4.apps.googleusercontent.com" || process.env.GOOGLE_CLIENT_ID,
      clientSecret: "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" || process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: "2d727d6faa1fcccbde4c" || process.env.GITHUB_ID,
      clientSecret: "14d449b88f573f273e448aa89d2d62d0f25e0040" || process.env.GITHUB_SECRET,
    }),
    TwitterProvider({
      clientId: "3XBOpJ2B0qMNnIgwNmZz2sfFH" || process.env.TWITTER_CLIENT_ID,
      clientSecret: "l85GbBJNhezmUhil1tcU8GB6UZYCIViEuWio5Lw8WcXmZuP8W3" || process.env.TWITTER_CLIENT_SECRET,
      version: "2.0", // opt-in to Twitter OAuth 2.0
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
};
export default NextAuth(NextAuthOptions);
