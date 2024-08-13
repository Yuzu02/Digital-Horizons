import { cn } from "@/lib/utils";

// Componente que permite hacer scroll hacia un elemento en la página al hacer click
export const ScrollLink = ({
  children,
  target,
  className,
}: {
  children: React.ReactNode;
  target: string;
  className?: string;
}) => {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.scrollY;
      const middle = absoluteElementTop - window.innerHeight / 2;
      window.scrollTo({ top: middle, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn("text-blue-500 hover:underline", className)}
    >
      {children}
    </button>
  );
};
