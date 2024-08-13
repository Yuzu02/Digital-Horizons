import ToasterProvider from "@/components/provider/ToasterProvider";
import DesktopNav from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export default function Header() {
  return (
    <header className="mt-4">
      <div className="mb-2 hidden lg:block">
        <DesktopNav />
      </div>
      <div className="lg:hidden">
        <MobileNav />
      </div>
      <div>
        <ToasterProvider />
      </div>
    </header>
  );
}
