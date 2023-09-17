import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: number,
    user?: {
      id: number;
    } & DefaultSession["user"];
  }
}

