// Components
"use client";
import { useSearchParams } from "next/navigation";
import LoginButton from "./LoginButton";
import { FaGoogle, FaGithub, FaRegUser } from "react-icons/fa";
import { MdOutlineMail, MdOutlinePassword } from "react-icons/md";
import Link from "next/link";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { loginResolver, Login } from "@/schemas/login";
import { toast } from "sonner";

interface FormLoginProps {
  isRegister?: boolean;
}

export const FormLogin: React.FC<FormLoginProps> = ({ isRegister }) => {
  const formFields = [
    ...(isRegister
      ? [
          {
            id: "nombreUsuario",
            type: "text",
            placeholder: "Nombre Usuario",
            label: "Crear Nombre de Usuario",
            autoComplete: "given-name",
            icon: <FaRegUser />,
          },
        ]
      : []),
    {
      id: "email",
      type: "email",
      placeholder: "Correo electrónico",
      label: "Correo electrónico",
      autoComplete: "email",
      icon: <MdOutlineMail />,
      pattern:
        "[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}",
    },
    {
      id: "password",
      type: "password",
      placeholder: "Contraseña",
      label: "Contraseña",
      autoComplete: "off",
      icon: <MdOutlinePassword />,
    },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: loginResolver,
  });

  const promise = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ name: "Sonner" }), 2000),
    );

  // ? Probando, esto puede ser eliminado
  const onSubmit = (data: Login) => {
    toast.promise(promise, {
      loading: "Validando datos...",
      success: "Validación Completada",
      error: "Error",
    });
    console.log(data);
  };

  const searchParams = useSearchParams();
  const returnUrl = searchParams.get("returnUrl") ?? "/dashboard";

  return (
    <section className="container flex size-full min-h-screen max-w-md flex-col justify-center">
      {/* Me gusto el efecto y quería probar como se ve xd */}
      <NeonGradientCard className="">
        <form
          action="/dashboard"
          className="flex w-full flex-col items-center justify-center gap-12 px-4 py-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-4xl font-bold">
            {isRegister ? "Crear Cuenta" : "Bienvenido"}
          </h2>
          <div className="flex w-full flex-col gap-5">
            {formFields.map((field) => (
              <Input
                key={field.id}
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                label={field.label}
                icon={field.icon}
                variant={"underline"}
                autoComplete={field.autoComplete}
                error={errors[field.id as keyof Login]?.message}
                {...register(field.id as keyof Login, {
                  ...(field.pattern && {
                    pattern: {
                      value: new RegExp(field.pattern),
                      message: `Formato de ${field.id} inválido`,
                    },
                  }),
                })}
              />
            ))}
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
              <LoginButton
                provider="google"
                icon={<FaGoogle />}
                returnUrl={returnUrl}
              />
              <LoginButton
                provider="github"
                icon={<FaGithub />}
                returnUrl={returnUrl}
              />
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
