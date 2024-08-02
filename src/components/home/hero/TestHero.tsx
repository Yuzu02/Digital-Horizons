// Data
import Link from "next/link";
import HomePageData from "../data";

// Components
import { ThemeModeToggle } from "@/components/theme/ThemeModeToggle";
import ShimmerButton from "@/components/magicui/shimmer-button";

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
        <Link href="/blog">
          <div className="z-10 flex min-h-[16rem] items-center justify-center">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                {HomePageData.viewBlogLabel}
              </span>
            </ShimmerButton>
          </div>
        </Link>
      </main>
    </div>
  );
}
