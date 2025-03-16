// Data
import Link from "next/link";

// Components
import { ThemeModeToggle } from "@/components/theme/ThemeModeToggle";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { HomePageData } from "@/utils/data/home/constants";

export default function TestHero() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <NeonGradientCard className="w-full max-w-md">
        <div className="flex flex-col items-center justify-center space-y-6 p-8">
          <ThemeModeToggle />
          <h1 className="text-center text-4xl font-bold">
            {HomePageData.welcomeMessage}
          </h1>
          <p className="text-center text-lg">{HomePageData.description}</p>
          <p className="text-center text-lg">
            <a
              href="https://github.com/Yuzu02/tech-blog"
              className="text-blue-500 hover:underline"
            >
              {HomePageData.learnMoreLabel}
            </a>
          </p>
          <p className="text-center text-lg">
            <a
              href="https://github.com/Yuzu02/tech-blog/tree/dev"
              className="text-blue-500 hover:underline"
            >
              {HomePageData.viewSourceLabel}
            </a>
          </p>
          <Link href={HomePageData.viewBlogLink} className="w-full">
            <ShimmerButton className="w-full shadow-2xl">
              <span className="text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white lg:text-lg dark:from-white dark:to-slate-900/10">
                {HomePageData.viewBlogLabel}
              </span>
            </ShimmerButton>
          </Link>
          <Link href={HomePageData.viewCategoriesBlogLink} className="w-full">
            <ShimmerButton
              className="w-full"
              background="#ffffff"
              shimmerColor="#000000"
            >
              <span className="text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-black lg:text-lg dark:from-slate-900/10 dark:to-white">
                {HomePageData.viewCategoriesLabel}
              </span>
            </ShimmerButton>
          </Link>
        </div>
      </NeonGradientCard>
    </div>
  );
}
