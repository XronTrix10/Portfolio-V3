import type { JSX } from "react";
import Link from "next/link";

import {
  GitHubIcon,
  LeetcodeIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/assets/icons";

import Counter from "./count";

/**
 * Renders the Footer component.
 * @returns {JSX.Element} the Footer component.
 */
const Footer = (): JSX.Element => {
  return (
    <footer
      className="absolute bottom-20 left-1/2 z-20 my-6 flex 
    w-full max-w-screen-lg -translate-x-1/2 flex-col items-center 
    justify-between gap-y-4 text-xs text-dark-gray/80 md:bottom-6 
    md:flex-row md:px-2 2xl:max-w-screen-xl 2xl:px-4"
    >
      <div className="relative flex items-center gap-x-2">
        <Link
          href="https://github.com/XronTrix10"
          className="text-dark-gray duration-300 hover:text-light-gray"
        >
          <GitHubIcon size={18} />
        </Link>
        <Link
          href="https://leetcode.com/u/XronTrix10"
          className="text-dark-gray duration-300 hover:text-light-gray"
        >
          <LeetcodeIcon size={18} />
        </Link>
        <Link
          href="https://x.com/XronTrix10"
          className="text-dark-gray duration-300 hover:text-light-gray"
        >
          <TwitterIcon size={16} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/sreejan-naru-472195237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="text-dark-gray duration-300 hover:text-light-gray"
        >
          <LinkedInIcon size={18} />
        </Link>
      </div>

      <Counter />
    </footer>
  );
};

export default Footer;
