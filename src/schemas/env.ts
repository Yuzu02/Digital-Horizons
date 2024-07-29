/* eslint-disable @typescript-eslint/no-namespace */
import { z } from "zod";

const envVars = z.object({
  // NextAuth
  NEXTAUTH_SECRET: z.string(),
  NEXTAUTH_URL: z.string().default("http://localhost:3000"), //? Luego se cambiara a la url de autenticación

  /*
   * Cambiar NEXT_AUTH_URL por NEXTAUTH_URL en el archivo .env.local
   */

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
