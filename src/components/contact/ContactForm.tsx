"use client";
import { useForm, SubmitHandler } from "react-hook-form";
// ? import { useEffect } from "react";
import { Contact, contactResolver } from "@/schemas/contact";
import { Button } from "../ui/button";
import { FormInputs } from "./FormInputs";

export default function ContactForm() {
  const formFields = [
    {
      id: "nombre",
      type: "text",
      autoComplete: "given-name",
      placeholder: "Nombre",
    },
    {
      id: "email",
      type: "email",
      autoComplete: "email",
      placeholder: "Correo electrónico",
      pattern:
        "[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}",
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

  const onSubmit: SubmitHandler<Record<string, string>> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-4xl"
      noValidate
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {formFields.map((field) => (
          <FormInputs
            key={field.id}
            {...field}
            register={register}
            errors={errors}
          />
        ))}
      </div>
      <div className="mt-8 flex justify-end">
        <Button type="submit" className="px-6 py-2">
          Enviar
        </Button>
      </div>
    </form>
  );
}
