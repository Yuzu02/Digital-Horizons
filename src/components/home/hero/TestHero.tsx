// Data
import HomePageData from "../data";

// Components
import { ThemeModeToggle } from "@/components/theme/ThemeModeToggle";

export default function TestHero() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="mx-auto my-12 max-w-7xl space-y-5">
        <ThemeModeToggle />
        <h1 className="text-center text-5xl font-bold">
          {HomePageData.welcomeMessage}
        </h1>
        <p className="text-center text-xl">{HomePageData.description}</p>
        <p className="text-center text-xl">
          <a
            href="https://github.com/Yuzu02/tech-blog"
            className="text-blue-500"
          >
            {HomePageData.learnMoreLabel}
          </a>
        </p>
        <p className="text-center text-xl">
          <a
            href="https://github.com/Yuzu02/tech-blog/tree/dev"
            className="text-blue-500"
          >
            {HomePageData.viewSourceLabel}
          </a>
        </p>
      </main>
    </div>
  );
}
