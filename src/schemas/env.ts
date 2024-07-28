/* eslint-disable @typescript-eslint/no-namespace */
import { z } from "zod";

const envVars = z.object({
  // NextAuth
  NEXTAUTH_SECRET: z.string(),
  NEXT_AUTH_URL: z.string().default("http://localhost:3000"),

  //* Providers

  // Github
  GITHUB_APP_CLIENT_ID: z.string(),
  GITHUB_APP_CLIENT_SECRET: z.string(),

  // Google
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  //? Add more environment variables here
});

envVars.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVars> {}
  }
}
