// Component: Home
//? import Hero from "@/components/home/hero/Hero";
//? import Banner from "@/components/common/Banner";
import SearchBar from "@/components/blog/SearchBar";
import TestHero from "@/components/home/hero/TestHero";

export default function Home() {
  return (
    <section className="h-screen overflow-hidden">
      <header className="fixed right-0 top-0 z-10 w-full p-4">
        <div className="container mx-auto flex justify-end">
          <div className="w-72">
            <SearchBar />
          </div>
        </div>
      </header>
      <main className="flex h-full items-center justify-center">
        <TestHero />
      </main>
    </section>
  );
}
/* 
  <Hero
       title="El Impacto de la Tecnología en el Lugar de Trabajo: Cómo la Tecnología está Cambiando"
       author="Yuzu Kaufman"
       authorAvatar="/assets/Hero/Avatar_Yuzu.png"
       date="August 10, 2024"
       imageSrc="/assets/Hero/Hero.png"
      />   


       <Banner
        title="Welcome to the Blog"
        subtitle="The best place to read amazing articles"
        logoColor="text-yellow-400"
        backgroundColor="bg-gray-900"
      />
*/
