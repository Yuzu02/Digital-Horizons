import * as React from "react";
import { Contact } from "@/schemas/contact";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { UseFormRegister } from "react-hook-form";

import { Label } from "@radix-ui/react-dropdown-menu";

const inputSelectVariants = cva(
  // Default Styles for all buttons
  "peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal transition-all text-sm placeholder-shown:border-darkMode dark:placeholder-shown:border-lightMode border-secondary dark:border-secondary-dark invalid:border-red-600 outline-0 mt-6",
  {
    variants: {
      // Variant styles
      variant: {
        default:
          " border-2 p-2 rounded-md   ease-in-out duration-500 focus:border-secondary dark:focus:border-secondary-dark",

        underline:
          "border-b-2  py-1 duration-500 ease-in-out dark:focus:border-secondary-dark focus:border-secondary ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface InputSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof inputSelectVariants> {
  id?: string;
  label?: string;
  options?: { value: string; label: string }[];
  register: UseFormRegister<Contact>;
}

export const InputSelect = React.forwardRef<
  HTMLSelectElement,
  InputSelectProps
>(({ variant, className, label = "prueba", id, options, register }, ref) => {
  return (
    <div className="relative flex flex-col">
      <select
        className={`${cn(inputSelectVariants({ variant, className }))}`}
        id={id}
        {...register(id as keyof Contact)}
      >
        {options?.map((option) => (
          <option
            className="bg-lightMode dark:bg-darkMode"
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      {label && (
        <Label className="absolute left-0 top-0 py-1 text-xs font-medium text-gray-500 transition-all duration-500 ease-in-out peer-invalid:text-red-600 peer-focus:text-secondary dark:text-gray-400 dark:peer-focus:text-secondary-dark">
          {label}
        </Label>
      )}
    </div>
  );
});
