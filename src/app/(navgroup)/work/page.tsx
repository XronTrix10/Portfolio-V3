import type { JSX } from "react";
import type { Metadata } from "next";

import { MagicIcon } from "@/assets/icons";

export const metadata: Metadata = {
  title: "Works",
  description: "The works page of xrontrix portfolio",
};

/**
 * Renders the works page.
 * @returns {JSX.Element} the projects page.
 */
const Page = (): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-light-gray">
      <h4 className="flex flex-col items-center gap-x-4 gap-y-2 text-center text-light md:flex-row">
        Loading my work experience... <MagicIcon />
      </h4>
      <p className="mt-4 text-sm">Come back within a few days!</p>
    </div>
  );
};

export default Page;
