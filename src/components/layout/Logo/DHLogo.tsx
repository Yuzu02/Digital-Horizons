import Link from "next/link";

export default function DHLogo() {
  return (
    <div className="Master3 flex justify-items-center">
      <Link
        className="space-x-1 self-center justify-self-end whitespace-nowrap text-2xl font-semibold"
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
