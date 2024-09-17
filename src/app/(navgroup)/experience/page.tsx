import type { JSX } from "react";

import { MagicIcon } from "@/assets/icons";

/**
 * description
 * @returns {JSX.Element} the projects page.
 */
const Page = (): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-light-gray">
      <h4 className="flex gap-x-4 text-light">
        Loading my work experience... <MagicIcon />
      </h4>
      <p className="mt-4">Come back within a few days!</p>
    </div>
  );
};

export default Page;
