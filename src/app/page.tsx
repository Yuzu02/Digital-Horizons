import { Button } from "@/components/ui";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center min-h w-full gap-8">
      XD
      <Button
        variant="default"
        className="bg-accent-default text-white rounded-lg border-2 hover:bg-purple-700 hover:text-gray-500"
      >
        Click me
      </Button>
      <Image
        src="" // ? Add your image path here
        alt="Testing"
        width={200}
        height={200}
      />
    </div>
  );
}
