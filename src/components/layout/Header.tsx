// Todo : Hacer el header de la pagina

import Link from "next/link";
import DHLogo from "@/components/layout/Logo/DHLogo";
import React from "react";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdMiscellaneousServices } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineSolution } from "react-icons/ai";

export default function Header() {
  return (
    <header className="mt-5">
      <div className="Logos1 flex h-20 justify-items-center bg-emerald-300">
        <div className="container">
          <DHLogo />
        </div>
        <nav className="Master m-auto flex max-w-3xl justify-start">
          <li className="flex flex-row justify-center gap-16 font-bold">
            <ul>
              <FaHome />
              <Link href="">Home</Link>
            </ul>
            <ul>
              <FcAbout />
              <Link href="">About</Link>
            </ul>
            <ul>
              <AiOutlineSolution />
              <Link href="">Solutions</Link>
            </ul>
            <ul>
              <RiContactsLine />
              <Link href="">Contact</Link>
            </ul>
            <ul>
              <MdMiscellaneousServices />
              <Link href="">Pricing</Link>
            </ul>
          </li>
        </nav>
      </div>
    </header>
  );
}
