// Todo : Hacer el header de la pagina

import Link from "next/link";
import ToasterProvider from "@/components/provider/ToasterProvider"; // * Dejar el ToasterProvider para que funcione el toast
import { ThemeModeToggle } from "../theme/ThemeModeToggle";
// ? import DHLogo from "@/components/layout/Logo/DHLogo";

export default function Header() {
  return (
    <>
      <div>
        <div className="size-[50px] items-center"></div>
        <nav>
          <li className="Navigation-li">
            <ul>
              <Link href="" className="Navigation-a">
                services
              </Link>
            </ul>
            <ul>
              <Link href="" className="Navigation-a">
                services
              </Link>
            </ul>
            <ul>
              <Link href="" className="Navigation-a">
                services
              </Link>
            </ul>
            <ul>
              <Link href="" className="Navigation-a">
                services
              </Link>
            </ul>
            <ul>
              <ThemeModeToggle />
            </ul>
          </li>
        </nav>
      </div>
      <ToasterProvider />
    </>
  );
}
