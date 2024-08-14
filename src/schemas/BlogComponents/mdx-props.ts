import { z } from "zod";

// SubTitulo
export const SubTituloSchema = z.object({
  children: z.custom<React.ReactNode>(),
  id: z.string().optional(),
  className: z.string().optional(),
});

// SubSeccion
export const SubSeccionSchema = z.object({
  children: z.custom<React.ReactNode>(),
  id: z.string().optional(),
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
  position: z.enum(["center", "left", "right"]).optional(),
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

// YouTubeVideo
export const YouTubeVideoSchema = z.object({
  url: z.string(),
});

// Accordion
export const AccordionSchema = z.object({
  children: z.custom<React.ReactNode>(),
  title: z.string(),
});

// Export all the schemas as types to be used in the components
export type SubTituloProps = z.infer<typeof SubTituloSchema>;
export type SubSeccionProps = z.infer<typeof SubSeccionSchema>;
export type EnlaceProps = z.infer<typeof EnlaceSchema>;
export type ParrafoProps = z.infer<typeof ParrafoSchema>;
export type BlockQuoteProps = z.infer<typeof BlockQuoteSchema>;
export type ImagePropsExtended = z.infer<typeof ImageSchema>;
export type DividerProps = z.infer<typeof DividerSchema>;
export type AlertProps = z.infer<typeof AlertSchema>;
export type YouTubeVideoProps = z.infer<typeof YouTubeVideoSchema>;
export type AccordionProps = z.infer<typeof AccordionSchema>;
