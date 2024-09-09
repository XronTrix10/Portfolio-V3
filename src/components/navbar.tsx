import type { JSX } from "react";
import Link from "next/link";

import {
  HomeIcon,
  Project,
  SendMessageIcon,
  UserPersonalIcon,
  WorkIcon,
} from "@/assets/icons";

import NavbarTerminal from "./navbar-terminal";

const links =
  "rounded-full p-2 transition-all duration-500 hover:bg-light/10 hover:text-light";

/**
 * renders the navbar component.
 * @returns {JSX.Element} the navbar component.
 */
const Navbar = (): JSX.Element => {
  return (
    <nav className="fixed bottom-6 z-20 w-screen">
      <div className="mx-auto flex w-fit items-center gap-x-4">
        <div className="flex w-fit items-center justify-between gap-x-2 rounded-full border border-dark-gray/50 bg-light/5 px-2 py-1 text-sm text-light-gray/80 shadow-xl shadow-black *:text-xs 2xl:px-3 2xl:py-2">
          <Link href="/overview" className={links}>
            <HomeIcon />
          </Link>
          <Link href="/projects" className={links}>
            <Project />
          </Link>
          <Link href="/experience" className={links}>
            <WorkIcon />
          </Link>
          <Link href="/contact" className={links}>
            <SendMessageIcon />
          </Link>
          <Link href="/personal" className={links}>
            <UserPersonalIcon />
          </Link>
        </div>

        <NavbarTerminal />
      </div>
    </nav>
  );
};

export default Navbar;
