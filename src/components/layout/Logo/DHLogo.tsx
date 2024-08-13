import Image from "next/image";

export default function DHLogo() {
  return (
    <div className="Master3 flex justify-items-center">
      <Image
        className="Logos"
        src="/DHlogo/Imagen5.png"
        alt="Digital Horizons"
        width="140"
        height="140"
      />
      <span className="space-x-1 self-center justify-self-end whitespace-nowrap text-2xl font-semibold dark:text-white">
        Digitals Horizons
      </span>
    </div>
  );
}
