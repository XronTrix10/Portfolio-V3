"use client";

import type { JSX } from "react";
import { useState } from "react";

import Terminal from "@/components/terminal";

/**
 * description
 * @returns {JSX.Element} the projects page.
 */
const Page = (): JSX.Element => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">My Next.js App</h1>
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={() => setIsTerminalOpen(true)}
      >
        Open Terminal
      </button>
      <Terminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
};

export default Page;
