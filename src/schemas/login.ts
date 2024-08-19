import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const loginSchema = z.object({
  nombreUsuario: z
    .string()
    .min(3, {
      message: "El nombre de usuario debe tener al menos 3 caracteres",
    })
    .max(255, {
      message: "El nombre de usuario no puede exceder los 255 caracteres",
    })
    .optional(),
  email: z.string().email({ message: "Ingrese un correo electrónico válido" }),
  password: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
});

export type Login = z.infer<typeof loginSchema>;
export const loginResolver = zodResolver(loginSchema);
