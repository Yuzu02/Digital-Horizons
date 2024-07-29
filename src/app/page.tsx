// Component: Home
//? import Hero from "@/components/home/hero/Hero";
//? import Banner from "@/components/common/Banner";
import TestHero from "@/components/home/hero/TestHero";

export default function Home() {
  //? Example to test the authentication
  return (
    <section className="h-full">
      <TestHero />
      <div className="container h-full">
        <div className="flex h-full flex-col items-center justify-center"></div>
      </div>
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
