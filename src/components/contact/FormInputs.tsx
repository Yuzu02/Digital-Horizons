import { ContactFormFields, Contact } from "@/schemas/contact";
import { Input } from "../ui/input";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface FormInputProps
  extends Omit<ContactFormFields, "register" | "errors"> {
  register: UseFormRegister<Contact>;
  errors: FieldErrors<Contact>;
}

export const FormInputs: React.FC<FormInputProps> = ({
  id,
  type,
  placeholder,
  autoComplete,
  pattern,
  register,
  errors,
}) => {
  return (
    <div className="flex flex-col">
      <Input
        type={type}
        id={id}
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
      {errors[id as keyof Contact] && (
        <span className="text-red-500">
          {errors[id as keyof Contact]?.message}
        </span>
      )}
    </div>
  );
};
