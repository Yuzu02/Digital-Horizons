// Component: Home
import { ThemeModeToggle } from "@/components/theme/ThemeModeToggle";

export default function Home() {
  //? Example to test the authentication
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="mx-auto my-12 max-w-7xl space-y-5">
        <ThemeModeToggle />
        <h1 className="text-center text-5xl font-bold">
          Welcome to the Tech Blog
        </h1>
        <p className="text-center text-xl">
          A tech blog using Next.js, TypeScript, and Tailwind CSS
        </p>
        <p className="text-center text-xl">
          <a
            href=" 
            "
            className="text-blue-500"
          >
            Learn more
          </a>
        </p>
        <p className="text-center text-xl">
          <a
            href=" 
            "
            className="text-blue-500"
          >
            View the source code
          </a>
        </p>
      </main>
    </div>
  );
}
