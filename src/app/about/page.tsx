import DigitalHorizons from "@/components/about/DigitalHorizons";
import { MissionVisionValues } from "@/components/about/MissionVisionValue";
import TeamSection from "@/components/about/team/TeamSection";

const AboutPage = () => {
  return (
    <main className="mt-16 flex h-full items-center justify-center md:mt-0">
      <div className="flex flex-col items-center">
        {/* About Us */}
        <DigitalHorizons />
        {/* Mission, Vision, Values */}
        <MissionVisionValues />
        {/* Team Section */}
        <TeamSection />
      </div>
    </main>
  );
};

export default AboutPage;
