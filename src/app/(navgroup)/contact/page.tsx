"use client";

import { useState } from "react";
import type { JSX } from "react";

/**
 * description
 * @returns {JSX.Element} the projects page.
 */
const Page = (): JSX.Element => {
  const [text, setText] = useState("");
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl">Anything, just send a Hi! 👋</h1>

      <div className="mt-12 flex w-[600px] gap-x-4">
        <textarea
          className="w-full resize-none border-b border-dark-gray/50 bg-transparent outline-none focus:outline-none"
          value={text}
          rows={4}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Page;
