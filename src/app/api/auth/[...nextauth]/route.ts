import NextAuth from "next-auth";
// AuthOptions
import { authOptions } from "@/auth/authOptions";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
