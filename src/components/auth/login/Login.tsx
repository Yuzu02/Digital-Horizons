// Components
"use client";
import { ThemeModeToggle } from "@/components/theme/ThemeModeToggle";
import LoginButton from "./LoginButton";
import { FaGoogle, FaGithub, FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Link from "next/link";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { Input } from "@/components/ui/input";

export const Login = () => {
  return (
    <section className="container flex min-h-screen flex-col items-center justify-center">
      <NeonGradientCard className="max-w-lg">
        <form
          action="/dashboard"
          className="flex w-full max-w-lg flex-col items-center justify-center gap-8 bg-lightMode p-10 dark:bg-zinc-950"
        >
          <ThemeModeToggle />
          <h2 className="my-4 text-4xl font-bold">Bienvenido</h2>
          <div className="flex w-full flex-col gap-5">
            <Input
              id="inp1"
              icon={<FaRegUser />}
              variant={"underline"}
              placeholder="Usuario"
              type="text"
              label="Nombre de Usuario"
            />
            <Input
              id="inp2"
              icon={<MdOutlineMail />}
              variant={"underline"}
              placeholder="Correo"
              type="email"
              label="Correo Electrónico"
            />
          </div>
          <button
            type="submit"
            className="w-5/6 rounded-full bg-gradient-custom bg-200 bg-right-center p-1 text-neutral-50 transition-all duration-500 ease-in-out hover:bg-left-center hover:text-neutral-900"
          >
            Iniciar Seccion
          </button>
          <div>
            <span>O Inicia Sección Con</span>
            <div className="flex items-center justify-center gap-5">
              <LoginButton provider="google" icon={<FaGoogle />} />
              <LoginButton provider="github" icon={<FaGithub />} />
            </div>
          </div>
          <div>
            <p>No tienes cuenta?</p>
            <Link href="#" className="text-secondary dark:text-secondary-dark">
              <span className="hover:text-secondary-hover hover:underline">
                Regístrate Ahora
              </span>
            </Link>
          </div>
        </form>
      </NeonGradientCard>
    </section>
  );
};

export default Login;
