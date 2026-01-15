import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "@/app/actions/server/auth";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        // email: { label: "Email", type: "text" },
        // password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const user = await loginUser(credentials);

        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
