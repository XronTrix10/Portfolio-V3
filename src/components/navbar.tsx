import type { JSX } from "react";
import Link from "next/link";

/**
 * renders the navbar component.
 * @returns {JSX.Element} the navbar component.
 */
const Navbar = (): JSX.Element => {
  return (
    <nav className="fixed bottom-10 z-20 w-screen">
      <div className="mx-auto flex w-fit items-center justify-between gap-x-4 rounded-full border border-dark-gray p-3 text-sm">
        <Link href="/overview" className="btn">
          Home
        </Link>
        <Link href="/projects" className="btn">
          Projects
        </Link>
        <Link href="/experience" className="btn">
          Experience
        </Link>
        <Link href="/conact" className="btn">
          Contact
        </Link>
        <Link href="/personal" className="btn">
          Personal
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
