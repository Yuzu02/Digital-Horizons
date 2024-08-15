// Components: Home
import Features from "@/components/home/Features/Features";
import Hero from "@/components/home/hero/Hero";
import Post from "@/components/home/post/Post";
import { Testimonials } from "@/components/home/testimonial/Testimonials";
import Banner from "@/components/common/Banner";

export default function Home() {
  return (
    <main className="flex h-full items-center justify-center">
      <div className="flex flex-col items-center">
        {/* <Hero /> */}
        <Hero />
        {/* <Features /> */}
        <Features />
        {/* <Testimonials /> */}
        <Testimonials />
        {/* <Post /> */}
        <Post />
        {/* <Banner /> */}
        <Banner />
      </div>
    </main>
  );
}
