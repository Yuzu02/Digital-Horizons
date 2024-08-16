// MobileNav.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { SearchIcon } from "lucide-react";
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
import { ThemeModeToggle } from "@/components/theme/ThemeModeToggle";
import SearchBar from "@/components/layout/SearchBar/SearchBar";
import { AnimatePresence } from "framer-motion";
import { mobileNavLinks } from "@/utils/data/layout/constants";

export function MobileNav() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isSearchOpen && <SearchBar onClose={() => setIsSearchOpen(false)} />}
      </AnimatePresence>
      <TooltipProvider>
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-transparent shadow-lg">
          <Dock direction="middle" className="py-2">
            {mobileNavLinks.navLinks.map((item) => (
              <DockIcon key={item.name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
                      )}
                    >
                      {item.icon}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-800 text-white dark:bg-gray-700">
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
            <DockIcon>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
                    )}
                  >
                    <SearchIcon className="size-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-800 text-white dark:bg-gray-700">
                  <p>Buscar</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
            <Separator
              orientation="vertical"
              className="h-8 bg-gray-300 dark:bg-gray-700"
            />
            <DockIcon>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex size-12 items-center justify-center">
                    <ThemeModeToggle className="bg-transparent dark:bg-transparent" />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-800 text-white dark:bg-gray-700">
                  <p>Tema</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          </Dock>
        </div>
      </TooltipProvider>
    </>
  );
}
