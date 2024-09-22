import type { JSX } from "react";
import type { Metadata } from "next";

import { MagicIcon } from "@/assets/icons";

export const metadata: Metadata = {
  title: "Personal",
  description: "The personal page of xrontrix portfolio",
};

/**
 * description
 * @returns {JSX.Element} the projects page.
 */
const Page = (): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-light-gray">
      <h4 className="flex gap-x-4 text-light">
        Loading personal stuff will take some time <MagicIcon />
      </h4>
      <p className="mt-4">Come back within a few days!</p>
    </div>
  );
};

export default Page;
