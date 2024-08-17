import { ContactFormFields, Contact } from "@/schemas/contact";
import { Input } from "../ui/input";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { InputSelect } from "../ui/InputSelect";
import { Textarea } from "@/components/ui/textarea";

interface FormInputProps
  extends Omit<ContactFormFields, "register" | "errors"> {
  register: UseFormRegister<Contact>;
  errors: FieldErrors<Contact>;
  options?: { value: string; label: string }[];
  label?: string;
}

export const FormInputs: React.FC<FormInputProps> = ({
  id,
  type,
  placeholder,
  autoComplete,
  pattern,
  register,
  errors,
  options,
  label,
}) => {
  let inputElement;

  if (type === "select") {
    inputElement = (
      <InputSelect
        id={id}
        label={label}
        options={options}
        register={register}
        variant={"underline"}
      />
    );
  } else if (type === "textarea") {
    inputElement = (
      <Textarea
        id={id}
        label={label}
        variant={"underline"}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className=""
        {...register(id as keyof Contact, {
          required: true,
        })}
      />
    );
  } else {
    inputElement = (
      <Input
        type={type}
        id={id}
        label={label}
        variant={"underline"}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...register(id as keyof Contact, {
          required: true,
          ...(pattern && {
            pattern: {
              value: new RegExp(pattern),
              message: `Formato de ${id} inválido`,
            },
          }),
        })}
      />
    );
  }

  return (
    <div className="relative flex flex-col">
      {inputElement}
      {errors[id as keyof Contact] && (
        <span className="text-sm text-red-400">
          {errors[id as keyof Contact]?.message}
        </span>
      )}
    </div>
  );
};
