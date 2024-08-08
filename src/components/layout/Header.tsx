// Todo : Hacer el header de la pagina

import { IoLogoInstagram } from "react-icons/io5";
// ? import DHLogo from "@/components/layout/Logo/DHLogo";

export default function Header() {
  return (
    <div>
      <div className="size-[50px] items-center">
        <IoLogoInstagram />
      </div>
      <nav>
        <li>
          <ul>
            <a href="">services</a>
          </ul>
          <ul>
            <a href="">services</a>
          </ul>
          <ul>
            <a href="">services</a>
          </ul>
          <ul>
            <a href="">services</a>
          </ul>
        </li>
      </nav>
    </div>
  );
}
