// Components
"use client";
import { ThemeModeToggle } from "@/components/theme/ThemeModeToggle";
import LoginButton from "./LoginButton";
import { FaGoogle, FaGithub, FaRegUser } from "react-icons/fa";
import { MdOutlineMail, MdOutlinePassword } from "react-icons/md";
import Link from "next/link";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { Input } from "@/components/ui/input";
import { useState, useRef } from "react";

// estas funciones son para validar aspectos clave de los datos antes de ser enviados.
function validateUsername(value: string) {
  if (value) {
    return null;
  }
}

function validateEmail(value: string) {
  if (value) {
    return null;
  }
}

interface FormLoginProps {
  isRegister?: boolean;
}

// Actualmente solo funcionan los botones de github y google.

export const FormLogin: React.FC<FormLoginProps> = ({ isRegister }) => {
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const inputs = {
    username: {
      ref: useRef<HTMLInputElement>(null),
      validation: validateUsername,
    },
    password: {
      ref: useRef<HTMLInputElement>(null),
      validation: validateUsername,
    },
    email: {
      ref: useRef<HTMLInputElement>(null),
      validation: validateEmail,
    },
  };
  type InputName = keyof typeof inputs;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors = {
      username: "",
      email: "",
      password: "",
    };

    for (const name in inputs) {
      const inputName = name as InputName;
      const input = inputs[inputName];
      console.log(inputs[inputName]);

      if (input.ref.current) {
        const valueInput = input.ref.current.value;

        const inputNameError = valueInput
          ? input.validation(valueInput)
          : "Este Campo no puede estar vació";

        if (inputNameError) {
          newErrors[inputName] = inputNameError;
        }
      }
    }

    setErrors(newErrors);

    // "Envió" de los datos.
    if (!newErrors.username && !newErrors.email) {
      console.log("Formulario enviado con éxito", {
        username: inputs.username.ref.current?.value,
        email: inputs.email.ref.current?.value,
        password: inputs.password.ref.current?.value,
      });
    }
  };

  return (
    <section className="container flex min-h-screen flex-col items-center justify-center">
      {/* Me gusto el efecto y quería probar como se ve xd */}
      <NeonGradientCard className="max-w-lg">
        <form
          action="/dashboard"
          className="flex w-full max-w-lg flex-col items-center justify-center gap-8 p-10"
          onSubmit={handleSubmit}
        >
          {/* Para probar los dos modo nada mas. Se podría colocar el logo aquí 🤔 */}
          <ThemeModeToggle />
          <h2 className="my-4 text-4xl font-bold">
            {isRegister ? "Crear Cuenta" : "Bienvenido"}
          </h2>
          <div className="flex w-full flex-col gap-5">
            {isRegister && (
              <Input
                id="UserInput"
                ref={inputs.username.ref}
                icon={<FaRegUser />}
                variant={"underline"}
                placeholder="Nombre Usuario"
                type="text"
                label="Crear Nombre de Usuario"
                error={errors.username}
              />
            )}

            <Input
              id="EmailInput"
              ref={inputs.email.ref}
              icon={<MdOutlineMail />}
              variant={"underline"}
              placeholder="Correo"
              type="email"
              label="Correo Electrónico"
              error={errors.email}
            />
            <Input
              id="PassInput"
              ref={inputs.password.ref}
              icon={<MdOutlinePassword />}
              variant={"underline"}
              placeholder="Contraseña"
              type="password"
              minLength={8}
              label="Contraseña"
              error={errors.password}
            />
          </div>
          <button
            type="submit"
            className="w-5/6 rounded-full bg-gradient-custom bg-200 bg-right-center p-1 text-neutral-50 transition-all duration-500 ease-in-out hover:bg-left-center hover:text-neutral-900"
          >
            {isRegister ? "Registrarse" : "Iniciar Seccion"}
          </button>
          <div>
            <span className="text-sm">
              {isRegister ? "Regístrate con" : "O Inicia Sección Con"}
            </span>
            <div className="flex items-center justify-center gap-5">
              <LoginButton provider="google" icon={<FaGoogle />} />
              <LoginButton provider="github" icon={<FaGithub />} />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p>{isRegister ? "Tienes una cuenta?" : "No tienes cuenta?"}</p>
            <Link
              href={`${isRegister ? "/login" : "/register"}`}
              className="m-0 text-sm text-secondary dark:text-secondary-dark"
            >
              <span className="hover:text-secondary-hover hover:underline">
                {isRegister ? "Iniciar Sesión aquí" : "Regístrate Ahora"}
              </span>
            </Link>
          </div>
        </form>
      </NeonGradientCard>
    </section>
  );
};

export default FormLogin;
