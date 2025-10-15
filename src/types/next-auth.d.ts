import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: {
      id?: string;
      email?: string;
      name?: string;
    } & DefaultSession["user"];
  }

  interface JWT {
    accessToken?: string;
  }
}
