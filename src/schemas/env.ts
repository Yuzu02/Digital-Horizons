/* eslint-disable @typescript-eslint/no-namespace */
import { z } from "zod";

const envVars = z.object({
  // NextAuth
  NEXTAUTH_SECRET: z.string(),
  NEXTAUTH_URL: z.string().optional(), //? Luego se cambiara a la url de autenticación en producción (https://digital-horizons.vercel.app/auth)

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
