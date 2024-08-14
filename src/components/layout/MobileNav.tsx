import React from "react";
import Link from "next/link";
import { HomeIcon, MailIcon, PencilIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ThemeModeToggle } from "../theme/ThemeModeToggle";

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  email: (props: IconProps) => <MailIcon {...props} />,
};

const DATA = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: PencilIcon, label: "Blog" },
  ],
  contact: {
    social: {
      email: {
        name: "Contacto",
        url: "/contact",
        icon: Icons.email,
      },
    },
  },
};

export function MobileNav() {
  return (
    <TooltipProvider>
      <Dock direction="middle">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full",
                  )}
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />
        {Object.entries(DATA.contact.social).map(([name, social]) => (
          <DockIcon key={name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={social.url}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full",
                  )}
                >
                  <social.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full py-2" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ThemeModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Tema</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <Separator orientation="vertical" className="h-full" />
      </Dock>
    </TooltipProvider>
  );
}
