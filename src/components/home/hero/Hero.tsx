import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import { avatarUrls, HomePageData } from "@/utils/data/home/constants";
import AvatarCircles from "@/components/magicui/avatar-circles";
import { TextEffect } from "@/components/magicui/TextEffect";
import WordRotate from "@/components/magicui/word-rotate";

export default function Hero() {
  return (
    <div className="bg-background text-foreground p-8 md:p-16 lg:p-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            {/* Texto Hero */}
            <p className="text-muted-foreground">
              {HomePageData.heroTitleSmall}
            </p>
            <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              {HomePageData.heroTitleBig} &nbsp;
              <WordRotate
                words={HomePageData.heroWords}
                className="inline-block bg-gradient-to-r from-cyan-200 via-yellow-300 to-emerald-400 bg-clip-text text-transparent"
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
            <h3 className="text-2xl font-bold">300+</h3>
            <p className="text-muted-foreground">Recursos disponibles</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">12k+</h3>
            <p className="text-muted-foreground">Descargas totales</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">10k+</h3>
            <p className="text-muted-foreground">Usuarios activos</p>
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

function ArrowRightIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function GlobeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function NewspaperIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8" />
      <path d="M15 18h-5" />
      <path d="M10 6h8v4h-8V6Z" />
    </svg>
  );
}

function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

/* 
   ? AvatarCircles for the hero section

                    <AvatarCircles
                      avatarUrls={[blog.frontmatter.avatar]}
                      numPeople={1}
                    />

*/
