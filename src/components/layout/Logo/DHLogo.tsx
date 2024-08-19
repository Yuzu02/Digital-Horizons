import Link from "next/link";
import { cn } from "@/lib/utils";

interface DHLogoProps {
  className?: string;
}

export default function DHLogo({ className }: Readonly<DHLogoProps>) {
  return (
    <div className="Master3 flex justify-items-center">
      <Link
        className={cn(
          "space-x-1 self-center justify-self-start whitespace-nowrap text-2xl font-semibold",
          className,
        )}
        href="/"
      >
        Digital Horizons
      </Link>
    </div>
  );
}

/*

Mira como se ve sin el logo

      <Image
        className="Logos"
        src="/DHlogo/Imagen5.png"
        alt="Digital Horizons"
        width="140"
        height="140"
      />


*/
