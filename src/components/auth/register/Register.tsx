import { Button } from "@/components/ui/button";

const Register = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800">Login</h1>
      <div className="flex space-x-5">
        <Button
          type="button"
          variant="default"
          size="lg"
          className="bg-primary-dark hover:bg-primary-hover"
        >
          Registrarse con Google
        </Button>
        <Button className="rounded-lg border border-black bg-green-500 px-5 py-1">
          Registrarse con Github
        </Button>
      </div>
    </section>
  );
};

export default Register;
