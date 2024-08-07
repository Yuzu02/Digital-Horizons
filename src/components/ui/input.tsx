import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Label } from "./label";

const inputVariants = cva(
  //*  Default Styles for all buttons
  "peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal transition-all text-sm placeholder-shown:border-darkMode dark:placeholder-shown:border-lightMode border-secondary border-secondary-dark invalid:border-red-600 outline-0 mt-6",
  {
    variants: {
      // * Variant styles
      variant: {
        default:
          " border-2 p-2.5 rounded-md   ease-in-out duration-500 focus:border-secondary dark:focus:border-secondary-dark",

        underline:
          "border-b-2  py-2.5 duration-500 ease-in-out dark:focus:border-secondary-dark focus:border-secondary ",

        rounded:
          "border-2  rounded-full py-2.5 dark:focus:border-secondary-dark focus:border-secondary duration-500 ease-in-out ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  icon?: React.ReactNode;
  error?: string | null;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", variant, type, icon, error, label, ...props }, ref) => {
    return (
      <div>
        <div className="relative flex w-full flex-col items-center justify-center">
          <input
            type={type}
            className={`${cn(inputVariants({ variant, className }))} ${icon ? "pl-8" : ""} `}
            ref={ref}
            {...props}
          />
          {icon && (
            <span className="absolute bottom-3.5 left-2.5 transition-all duration-500 ease-in-out peer-invalid:text-red-600 peer-focus:text-secondary dark:peer-focus:text-secondary-dark">
              {icon}
            </span>
          )}
          {label && (
            <Label className="absolute bottom-11 left-0 py-1 text-sm transition-all duration-500 ease-in-out peer-invalid:text-red-600 peer-focus:text-secondary dark:peer-focus:text-secondary-dark">
              {label}
            </Label>
          )}
        </div>
        {error && (
          <p className="max-h-10 overflow-y-hidden p-1 text-xs text-red-400">
            {error}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
export { Input };
