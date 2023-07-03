import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username" },
        password: { label: "Password" },
      },
      authorize(credentials, req) {
        console.log(credentials);
        if (
          credentials?.username === "john" &&
          credentials.password === "1234"
        ) {
          return {
            id: "1",
            name: "john",
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  }
};