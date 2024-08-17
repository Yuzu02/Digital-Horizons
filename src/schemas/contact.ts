import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const motivos = ["consulta", "sugerencia", "colab", "report"] as const;
export type Motivos = (typeof motivos)[number];

export const mappedMotivos: { [key in Motivos]: string } = {
  consulta: "Consulta general",
  sugerencia: "Sugerencia de contenido",
  colab: "Colaboraciones",
  report: "Reporte de problemas",
};

export const contactSchema = z.object({
  nombre: z
    .string()
    .min(3, { message: "El nombre debe tener al menos 3 caracteres" })
    .max(255, { message: "El nombre no puede exceder los 255 caracteres" }),
  email: z.string().email({ message: "Ingrese un correo electrónico válido" }),
  mensaje: z
    .string()
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres" })
    .max(1000, { message: "El mensaje no puede exceder los 1000 caracteres" }),
  motivo: z.enum(motivos, {
    errorMap: () => ({ message: "Seleciona una opcion valida" }),
  }),
});

export const contactFormFields = z.object({
  id: z.string(),
  type: z.string(),
  placeholder: z.string().optional(),
  register: z.function().args(z.string(), z.any()).returns(z.any()),
  errors: z.record(z.string(), z.any()),
  autoComplete: z.string().optional(),
  pattern: z.string().optional(),
});

export const contactResolver = zodResolver(contactSchema);
export type Contact = z.infer<typeof contactSchema>;
export type ContactFormFields = z.infer<typeof contactFormFields>;
