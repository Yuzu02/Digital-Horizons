import Features from "@/components/home/Features/Features";
import Hero from "@/components/home/hero/Hero";
import Post from "@/components/home/post/Post";
import { Testimonials } from "@/components/home/testimonial/Testimonials";
import { TrendingCategoryBanner } from "@/components/common/TrendingCategoryBanner";

export default function Home() {
  return (
    <main className="mt-14 flex h-full items-center justify-center md:mt-0">
      <div className="flex flex-col items-center">
        {/* <Hero /> */}
        <Hero />
        {/* <Features /> */}
        <Features />
        {/* <Testimonials /> */}
        <Testimonials />
        <div className="grid grid-cols-1 gap-12">
          <article className="mx-auto max-w-6xl">
            {/* <Post /> */}
            <Post />
          </article>
          {/* <TrendingCategoryBanner /> */}
          <TrendingCategoryBanner />
        </div>
      </div>
    </main>
  );
}
