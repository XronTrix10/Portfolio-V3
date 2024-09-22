import type { FC, JSX } from "react";
import Link from "next/link";

import {
  GitHubIcon,
  LeetcodeIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/assets/icons";

type FooterProps = {
  count: number;
};

/**
 * Renders the Footer component.
 * @param {FooterProps} props the Footer component props.
 * @returns {JSX.Element} the Footer component.
 */
const Footer: FC<FooterProps> = ({ count }: FooterProps): JSX.Element => {
  return (
    <footer className="absolute bottom-6 left-1/2 flex w-full max-w-screen-lg -translate-x-1/2 items-center justify-between px-2 text-xs text-dark-gray/80 2xl:max-w-screen-xl">
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

      <div>
        <span className="text-light-gray/70">{count}</span> visits so far
      </div>
    </footer>
  );
};

export default Footer;
