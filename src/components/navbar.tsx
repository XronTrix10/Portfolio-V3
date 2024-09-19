"use client";

import type { JSX } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  HomeIcon,
  Project,
  SendMessageIcon,
  UserPersonalIcon,
  WorkIcon,
} from "@/assets/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import NavbarTerminal from "./navbar-terminal";

const links =
  "rounded-full p-2 transition-all duration-500 hover:bg-light/10 hover:text-light";

/**
 * Returns the link class based on the pathname.
 * @param {string} pathname the current pathname.
 * @param {string} url the url to check.
 * @returns {string} the link class.
 */
const getLinkClass = (pathname: string, url: string): string => {
  if (pathname === url) return links + " bg-light/10";
  return links;
};

/**
 * renders the navbar component.
 * @returns {JSX.Element} the navbar component.
 */
const Navbar = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-6 z-20 w-screen">
      <div className="mx-auto flex w-fit items-center gap-x-4">
        <div className="flex w-fit items-center justify-between gap-x-1 rounded-full border border-dark-gray/50 bg-light/5 p-1 text-sm text-light-gray/80 shadow-xl shadow-black *:text-xs 2xl:gap-x-2 2xl:p-2">
          <TooltipProvider>
            <Tooltip delayDuration={400}>
              <TooltipTrigger asChild>
                <Link href="/home" className={getLinkClass(pathname, "/home")}>
                  <HomeIcon />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top" align="center">
                Home
              </TooltipContent>
            </Tooltip>

            <Tooltip delayDuration={400}>
              <TooltipTrigger asChild>
                <Link
                  href="/projects"
                  className={getLinkClass(pathname, "/projects")}
                >
                  <Project />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top" align="center">
                Projects
              </TooltipContent>
            </Tooltip>

            <Tooltip delayDuration={400}>
              <TooltipTrigger asChild>
                <Link href="/work" className={getLinkClass(pathname, "/work")}>
                  <WorkIcon />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top" align="center">
                Work
              </TooltipContent>
            </Tooltip>

            <Tooltip delayDuration={400}>
              <TooltipTrigger asChild>
                <Link
                  href="/contact"
                  className={getLinkClass(pathname, "/contact")}
                >
                  <SendMessageIcon />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top" align="center">
                Contact
              </TooltipContent>
            </Tooltip>

            <Tooltip delayDuration={400}>
              <TooltipTrigger asChild>
                <Link
                  href="/personal"
                  className={getLinkClass(pathname, "/personal")}
                >
                  <UserPersonalIcon />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top" align="center">
                Personal
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <NavbarTerminal />
      </div>
    </nav>
  );
};

export default Navbar;
