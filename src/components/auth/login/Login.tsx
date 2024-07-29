// Components
import { Button } from "@/components/ui/button";

export const Login = () => {
  const loginText = {
    login: "Login",
    google: "Iniciar sesión con Google",
    github: "Iniciar sesión con Github",
  };

  /*
   *La idea seria mover todos los textos de la app a un index.ts en una carpeta data para manejarlo de forma centralizada
   */

  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Login</h1>
      <div className="flex space-x-5">
        <Button
          type="button"
          variant="default"
          size="lg"
          className="bg-primary-dark hover:bg-primary-hover"
        >
          {loginText.google}
        </Button>
        <Button className="dark:bg-light rounded-lg border border-black bg-green-500 px-5 py-1 text-lightMode dark:text-darkMode">
          {loginText.github}
        </Button>
      </div>
    </section>
  );
};

export default Login;
