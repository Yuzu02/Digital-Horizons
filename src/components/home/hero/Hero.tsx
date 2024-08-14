import { Button } from "@/components/ui/button";
import { avatarUrls, HomePageData, stats } from "@/utils/data/home/constants";
import AvatarCircles from "@/components/magicui/avatar-circles";
import { TextEffect } from "@/components/magicui/TextEffect";
import WordRotate from "@/components/magicui/word-rotate";
import NumberTicker from "@/components/magicui/number-ticker";
import {
  ArrowRightIcon,
  GlobeIcon,
  NewspaperIcon,
  StarIcon,
} from "@/components/home/hero/svg/HeroIcons";

export default function Hero() {
  return (
    <div className="p-8 md:p-16 lg:p-24 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            {/* Texto Hero */}
            <p className="text-muted-foreground">
              {HomePageData.heroTitleSmall}
            </p>
            <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              {HomePageData.heroTitleBig}
              <WordRotate
                words={HomePageData.heroWords}
                className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              />
            </h1>
            <TextEffect
              className="text-muted-foreground"
              preset="blur"
              per="char"
            >
              {HomePageData.heroDescription}
            </TextEffect>
          </div>
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex items-center space-x-4">
              <AvatarCircles avatarUrls={avatarUrls} numPeople={3} />
            </div>
            <div className="text-center">
              <h2 className="text-lg font-bold">
                {/* Texto Recursos */}
                {HomePageData.resourcesTitle}
              </h2>
              <p className="text-muted-foreground">
                {HomePageData.resourcesDescription}
              </p>
              <Button variant="outline" className="mt-4">
                {HomePageData.resourcesButtonLabel}{" "}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            {/* Texto Stats */}
            <h3 className="text-2xl font-bold">
              <NumberTicker value={stats[0].number} />
            </h3>
            <p className="">{stats[0].label}</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">
              <NumberTicker value={stats[1].number} />
            </h3>
            <p className="">{stats[1].label}</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">
              <NumberTicker value={stats[2].number} />
            </h3>
            <p className="">{stats[2].label}</p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 text-center">
            <NewspaperIcon className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold">
              Últimas actualizaciones de noticias
            </h3>
            <p className="text-muted-foreground">Mantente al día</p>
            <p className="text-muted-foreground">
              Más de 1,000 artículos publicados mensualmente
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 text-center">
            <StarIcon className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold">Colaboradores expertos</h3>
            <p className="text-muted-foreground">Información confiable</p>
            <p className="text-muted-foreground">
              Más de 5 expertos en Tecnología de renombre en nuestro equipo
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 text-center">
            <GlobeIcon className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold">Lectores globales</h3>
            <p className="text-muted-foreground">Impacto mundial</p>
            <p className="text-muted-foreground">
              2 millones de lectores mensuales
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
