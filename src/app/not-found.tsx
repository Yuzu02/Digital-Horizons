import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white">
      <h1 className="mb-4 text-8xl font-bold text-primary">404</h1>
      <p className="mb-8 text-gray-600">
        La página que buscas no existe. Por favor, verifica la URL e inténtalo
      </p>
      <Link href="/" className="text-primary hover:underline">
        ← Volver a la página de inicio
      </Link>
    </div>
  );
}
