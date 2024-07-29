import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

/*
    Luego se moveran todas las interfaces a la carpeta types para manejarlo de forma centralizada
*/

interface ErrorPageProps {
  error: string;
  errorMessage: string;
  buttonText: string;
  redirectTo: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  error,
  errorMessage,
  buttonText,
  redirectTo,
}) => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(redirectTo);
  };

  return (
    <div>
      <h1>{error}</h1>
      <p>{errorMessage}</p>
      <div className="flex h-screen flex-col items-center justify-center">
        <Button
          onClick={handleRedirect}
          className="rounded-lg border border-black px-5 py-1"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
