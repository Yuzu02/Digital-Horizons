"use client";
import { useForm, SubmitHandler } from "react-hook-form";
// ? import { useEffect } from "react";
import { Toaster, toast } from "sonner";
import { Contact, contactResolver, mappedMotivos } from "@/schemas/contact";
import { Button } from "../ui/button";
import { FormInputs } from "./FormInputs";

export default function ContactForm() {
  const formFields = [
    {
      id: "nombre",
      type: "text",
      autoComplete: "given-name",
      placeholder: "Nombre",
      label: "Tu Nombre",
    },
    {
      id: "email",
      type: "email",
      autoComplete: "email",
      placeholder: "Correo electrónico",
      label: "Tu Correo",
      pattern:
        "[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}",
    },
    {
      id: "motivo",
      type: "select",
      label: "Motivo del Mensaje",
      autoComplete: "off",
      options: Object.entries(mappedMotivos).map(([key, value]) => ({
        value: key,
        label: value,
      })),
    },
    {
      id: "mensaje",
      type: "textarea",
      autoComplete: "off",
      placeholder: "Mensaje",
      label: "Mensaje",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Contact>({
    resolver: contactResolver,
  });

  const onSubmit: SubmitHandler<Contact> = (data) => {
    console.log("Formulario enviado con los datos:", data);
    toast.success("Su mensaje a sido enviado");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative mx-auto size-full max-w-4xl"
      noValidate
    >
      <div className="grid grid-rows-1 gap-4">
        {formFields.map((field) => (
          <FormInputs
            key={field.id}
            {...field}
            register={register}
            errors={errors}
          />
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-around gap-6">
        <Button
          type="submit"
          className="bg-primary-dark/90 px-12 py-2 hover:bg-primary-hover dark:bg-primary/90 dark:text-lightMode dark:hover:bg-primary-hover"
        >
          Enviar
        </Button>
        <p>Gracias por tu mensaje </p>
      </div>
      <Toaster richColors expand />
    </form>
  );
}
