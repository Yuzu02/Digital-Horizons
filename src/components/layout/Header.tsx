// Todo : Hacer el header de la pagina

import Link from "next/link";
// ? import DHLogo from "@/components/layout/Logo/DHLogo";

export default function Header() {
  return (
    <div>
      <div className="size-[50px] items-center"></div>
      <nav>
        <li>
          <ul>
            <Link href="">services</Link>
          </ul>
          <ul>
            <Link href="">services</Link>
          </ul>
          <ul>
            <Link href="">services</Link>
          </ul>
          <ul>
            <Link href="">services</Link>
          </ul>
        </li>
      </nav>
    </div>
  );
}
