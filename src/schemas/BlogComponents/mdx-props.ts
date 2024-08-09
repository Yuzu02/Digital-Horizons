import { z } from "zod";

// SubTitulo
export const SubTituloSchema = z.object({
  children: z.custom<React.ReactNode>(),
  className: z.string().optional(),
});

// SubSeccion
export const SubSeccionSchema = z.object({
  children: z.custom<React.ReactNode>(),
  className: z.string().optional(),
});

// Enlace
export const EnlaceSchema = z.object({
  children: z.custom<React.ReactNode>(),
  href: z.string(),
  className: z.string().optional(),
});

// Parrafo
export const ParrafoSchema = z.object({
  children: z.custom<React.ReactNode>(),
  className: z.string().optional().default(""),
});

// BlockQuote
export const BlockQuoteSchema = z.object({
  children: z.custom<React.ReactNode>(),
  className: z.string().optional(),
});

// ImageMDX
export const ImageSchema = z.object({
  src: z.string(),
  alt: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
  className: z.string().optional(),
  quality: z.number().optional().default(100),
});

// Divider
export const DividerSchema = z.object({
  className: z.string().optional(),
});

// Alert
export const AlertSchema = z.object({
  children: z.custom<React.ReactNode>(),
  type: z
    .enum(["info", "success", "warning", "error"])
    .optional()
    .default("info"),
  className: z.string().optional(),
});

// Exportación de todos los tipos al final del archivo
export type SubTituloProps = z.infer<typeof SubTituloSchema>;
export type SubSeccionProps = z.infer<typeof SubSeccionSchema>;
export type EnlaceProps = z.infer<typeof EnlaceSchema>;
export type ParrafoProps = z.infer<typeof ParrafoSchema>;
export type BlockQuoteProps = z.infer<typeof BlockQuoteSchema>;
export type ImageProps = z.infer<typeof ImageSchema>;
export type DividerProps = z.infer<typeof DividerSchema>;
export type AlertProps = z.infer<typeof AlertSchema>;
