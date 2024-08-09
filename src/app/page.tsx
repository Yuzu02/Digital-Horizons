// Component: Home
// - import Features from "@/components/home/Features/Features"; // ? Standby for Features component
import TestHero from "@/components/home/hero/TestHero";
// - import Hero from "@/components/home/hero/Hero"; // ? Standby for Hero component
import Post from "@/components/home/post/Post";
// - import Banner from "@/components/common/Banner"; // ? Standby for Banner component

export default function Home() {
  return (
    <main className="flex h-full items-center justify-center">
      <div className="flex flex-col items-center">
        {/* <Hero /> */}
        <TestHero />
        {/* <Features /> */}
        <Post />
      </div>
    </main>
  );
}
