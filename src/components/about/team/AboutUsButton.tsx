import { ArrowRightIcon } from "@/components/home/hero/svg/HeroIcons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutUsButton = () => {
  return (
    <Link href="/about">
      <Button
        variant="outline"
        size="lg"
        className="mt-4 dark:border-white dark:text-white"
      >
        Acerca de nosotros
        <ArrowRightIcon className="ml-2 h-4 w-4" />
      </Button>
    </Link>
  );
};

export default AboutUsButton;
