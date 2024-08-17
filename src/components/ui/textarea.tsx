import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Label } from "@radix-ui/react-dropdown-menu";

const textAreaVariants = cva(
  // Default Styles for all buttons
  " resize-none peer w-full min-h-20 bg-transparent text-blue-gray-700 font-sans font-normal transition-color text-sm placeholder-shown:border-darkMode dark:placeholder-shown:border-lightMode border-secondary dark:border-secondary-dark invalid:border-red-600 outline-0 mt-8",
  {
    variants: {
      // Variant styles
      variant: {
        default:
          " border-2 p-2 rounded-md  ease-in-out duration-500 focus:border-secondary dark:focus:border-secondary-dark",

        underline:
          "border-b-2  py-1 duration-500 ease-in-out dark:focus:border-secondary-dark focus:border-secondary ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textAreaVariants> {
  label?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, variant, ...props }, ref) => {
    return (
      <div className="relative">
        <textarea
          className={`${cn(textAreaVariants({ variant, className }))}`}
          ref={ref}
          {...props}
        />
        {label && (
          <Label className="absolute left-0 top-0 py-1 text-xs font-medium text-gray-500 transition-all duration-500 ease-in-out peer-invalid:text-red-600 peer-focus:text-secondary dark:text-gray-400 dark:peer-focus:text-secondary-dark">
            {label}
          </Label>
        )}
      </div>
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
