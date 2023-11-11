import NextAuth, { NextAuthOptions } from "next-auth";
import {UserModel} from "@/models/user";
import GoogleProvider from "next-auth/providers/google";
import  connectToDB  from "@/utils/database";
import { ObjectId } from "mongodb";




const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account }: any) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }

      return token
    },

  async session({ session, token }: { session: any, token: any }) {
    try {

    await connectToDB();


    const sessionUser = await UserModel.findOne({ email: session.user.email });

    session.user.id = sessionUser?._id.toString();

    session.accessToken = token.accessToken ;

    console.log("Opening session");

    return session;
    
    }
    catch (error : any) {
      console.log("Error opening session: ", error.message);
      return false;

    }

  },
  async signIn({ profile }: any) {
    try {
      await connectToDB();

      const userExists = await UserModel.findOne({email: profile.email });


      if (!userExists) {
          await UserModel.create({
            _id : new ObjectId(),
            email: profile.email,
            name: profile.name.replace(" ", "").toLowerCase(),
            image : profile.picture,
            garden : [],
            weather : [],
            weekLog: 0,
            city : "",
          });
      }
      
      return true;

    } catch (error : any) {
      console.log("Error checking if user exists: ", error.message);
      return false;

    }
  }
}

} as NextAuthOptions);

export { handler as GET, handler as POST };