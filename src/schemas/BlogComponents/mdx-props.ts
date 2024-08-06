import { z } from "zod";

// Parrafo
export const ParrafoSchema = z.object({
  children: z.custom<React.ReactNode>(),
  italic: z.boolean().optional().default(false),
  justify: z.boolean().optional().default(false),
});

// Types
export type ParrafoProps = z.infer<typeof ParrafoSchema>;
