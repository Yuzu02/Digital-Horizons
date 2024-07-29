import Image from "next/image";

interface HeroProps {
  title: string;
  imageSrc: string;
  author: string;
  authorAvatar: string;
  date: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  author,
  authorAvatar,
  date,
  imageSrc,
}) => {
  return (
    <div className="h-screen">
      <Image
        src={imageSrc}
        alt="Technology in workplace"
        className="h-full w-full object-cover"
        fill
      />
      <div className="absolute inset-0 flex items-end bg-black bg-opacity-50">
        <div className="max-w-2xl p-8 text-white">
          <span className="rounded bg-blue-500 px-2 py-1 text-sm font-semibold">
            Technology
          </span>
          <h1 className="mb-4 mt-2 text-4xl font-bold">{title}</h1>
          <div className="flex items-center">
            <Image
              src={authorAvatar}
              alt={author}
              className="mr-2 h-8 w-8 rounded-full"
              width={32}
              height={32}
            />
            <span>{author}</span>
            <span className="mx-2">•</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
