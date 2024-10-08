"use client";

import type { FC, JSX } from "react";
import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import * as Dialog from "@radix-ui/react-dialog";
import { usePathname, useRouter } from "next/navigation";

import CloseIcon from "@/assets/icons/close";
import useLocalStorage from "@/lib/hooks/useLocalStorage.hook";
import { executeCommand } from "@/lib/constants/commands.const";

type TerminalProps = {
  isOpen: boolean;
  onClose: () => void;
  isInteractive?: boolean;
  inCmd?: string;
  inOutput?: React.ReactNode;
};

/**
 * renders the terminal component.
 * @param {TerminalProps} props the terminal component props.
 * @returns {JSX.Element} the terminal component.
 */
const Terminal: FC<TerminalProps> = ({
  isOpen,
  onClose,
  isInteractive = false,
  inCmd,
  inOutput,
}: TerminalProps): JSX.Element => {
  const [input, setInput] = useState<string>("");
  const [storedValue, updateValue] = useLocalStorage<string[]>(
    ".bash_history",
    [],
  );
  const terminalDiv = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const router = useRouter();

  /**
   * handles the terminal input change.
   * @param {React.ChangeEvent<HTMLInputElement>} e the terminal input change event.
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  /**
   * handles the terminal submit.
   * @param {React.KeyboardEvent<HTMLInputElement>} e the terminal submit event.
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      executeCommand(input, storedValue, pathname, router, updateValue);
      setInput("");
    }
  };

  useEffect(() => {
    // Scrolls to the bottom of the terminal div
    if (terminalDiv.current) {
      terminalDiv.current.scrollTop = terminalDiv.current.scrollHeight;
    }
  }, [storedValue]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-0 flex items-center justify-center">
          <Dialog.Title />
          <Draggable handle=".terminal-header" cancel=".close-btn">
            <div
              className="h-3/4 w-11/12 overflow-hidden rounded-xl bg-black/80 shadow-lg 
            backdrop-blur-sm md:h-[450px] md:w-[700px]"
            >
              <div
                // eslint-disable-next-line tailwindcss/no-custom-classname
                className="terminal-header flex cursor-move items-center justify-between 
              bg-gradient-to-r from-dark-gray to-dark py-1 pl-4 pr-2 text-light"
              >
                <span className="text-sm">Terminal Pro</span>

                {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
                <Dialog.Close className="close-btn z-50 p-[2px] hover:bg-red-500">
                  <CloseIcon size={18} />
                </Dialog.Close>
              </div>
              <div
                ref={terminalDiv}
                className="h-[calc(100%-40px)] overflow-y-auto overflow-x-hidden p-2 text-sm text-light"
              >
                {isInteractive ? (
                  <div>
                    <span>┌──(guest㉿trix)-[~]</span>
                    <br />
                    <span>
                      └─$ {inCmd}
                      <br />
                    </span>
                    <div className="mt-3">{inOutput}</div>
                  </div>
                ) : (
                  <pre className="whitespace-pre-wrap break-words">
                    {storedValue.map((line, index) => (
                      <span
                        className="whitespace-pre-wrap break-words"
                        // eslint-disable-next-line react/no-array-index-key
                        key={`${index}-${line[0]}`}
                      >
                        {line}
                        <br />
                      </span>
                    ))}
                    <span>┌──(guest㉿trix)-[~]</span>
                    <br />
                    <span>
                      └─${" "}
                      <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        spellCheck={false}
                        placeholder="Type help for commands..."
                        className="border-none bg-transparent text-light outline-none placeholder:text-dark-gray
                         md:w-[500px]"
                      />
                    </span>
                  </pre>
                )}
              </div>
            </div>
          </Draggable>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Terminal;
