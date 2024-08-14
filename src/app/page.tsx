// Component: Home
// - import Features from "@/components/home/Features/Features"; // ? Standby for Features component
// -import TestHero from "@/components/home/hero/TestHero";
import Hero from "@/components/home/hero/Hero"; // ? Standby for Hero component
import Post from "@/components/home/post/Post";
// - import { Testimonials } from "@/components/home/testimonial/Testimonials";
// - import Banner from "@/components/common/Banner"; // ? Standby for Banner component

export default function Home() {
  return (
    <main className="mt-2 flex h-full items-center justify-center">
      <div className="flex flex-col items-center">
        {/* <TestHero /> */}
        <Hero />
        {/* <Features /> */}
        {/* <Testimonials /> */}
        {/* <Post /> */}
        <Post />
        {/* <Banner /> */}
      </div>
    </main>
  );
}
