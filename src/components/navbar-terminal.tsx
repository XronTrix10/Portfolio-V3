"use client";

import type { JSX } from "react";
import { useState } from "react";

import { Terminal as TerminalIcon } from "@/assets/icons";
import Terminal from "@/components/terminal";

/**
 * renders the navbar terminal button.
 * @returns {JSX.Element} the navbar terminal component.
 */
const NavbarTerminal = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="hidden w-fit items-center justify-between gap-x-2 rounded-full border border-dark-gray/50 bg-light/5 px-2 py-1 text-sm text-light-gray/80 shadow-xl shadow-black *:text-xs md:flex 2xl:px-3 2xl:py-2">
      <button
        className={`p-2 transition-all duration-500 hover:text-light ${isOpen ? "text-light" : ""}`}
        onClick={() => setIsOpen(true)}
      >
        <TerminalIcon />
      </button>
      <Terminal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default NavbarTerminal;
