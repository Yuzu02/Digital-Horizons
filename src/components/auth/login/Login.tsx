import { Button } from "@/components/ui/button";

export const Login = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white">Login</h1>
      <div className="flex space-x-5">
        <Button
          type="button"
          variant="default"
          size="lg"
          className="bg-primary-dark hover:bg-primary-hover"
        >
          Iniciar sesión con Google
        </Button>
        <Button className="dark:bg-light rounded-lg border border-black bg-green-500 px-5 py-1 text-lightMode dark:text-darkMode">
          Iniciar sesión con Github
        </Button>
      </div>
    </section>
  );
};

export default Login;
