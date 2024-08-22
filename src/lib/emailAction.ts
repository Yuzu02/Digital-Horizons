"use server";
import { cleanString } from "@/lib/utils";

export async function submitForm(formData: FormData) {
  const apiKey = process.env.WEB3FORMS_ACCESS_KEY;

  // Extraer los valores de nombre y motivo
  const nombre = cleanString(formData.get("nombre") as string);
  const motivo = cleanString(formData.get("motivo") as string);

  // Crear el asunto personalizado
  const subject = `Nuevo contacto: ${motivo} - ${nombre}`;

  if (!apiKey) {
    throw new Error("API key not configured");
  }

  // Agregar el asunto al formData
  formData.append("subject", subject);
  formData.append("from_name", "Digital Horizons");
  formData.append("access_key", apiKey);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error("Failed to create task");
  }
}
