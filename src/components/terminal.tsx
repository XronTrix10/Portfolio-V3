"use client";

import type { FC, JSX } from "react";
import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import * as Dialog from "@radix-ui/react-dialog";

import CloseIcon from "@/assets/icons/close";
import useLocalStorageArray from "@/lib/hooks/useLocalStorageArray";
import { executeCommand } from "@/lib/constants/commands.const";

type TerminalProps = {
  isOpen: boolean;
  onClose: () => void;
};

/**
 * renders the terminal component.
 * @param {TerminalProps} props the terminal component props.
 * @returns {JSX.Element} the terminal component.
 */
const Terminal: FC<TerminalProps> = ({
  isOpen,
  onClose,
}: TerminalProps): JSX.Element => {
  const [input, setInput] = useState<string>("");
  const [storedValue, updateValue] = useLocalStorageArray(".bash_history", []);
  const terminalDiv = useRef<HTMLDivElement>(null);

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
      executeCommand(input, storedValue, updateValue);
      setInput("");
    }
  };

  useEffect(() => {
    if (terminalDiv.current) {
      terminalDiv.current.scrollTop = terminalDiv.current.scrollHeight;
    }
  }, [storedValue]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-0 flex items-center justify-center">
          <Draggable handle=".terminal-header">
            <div className="h-[400px] w-[600px] overflow-hidden rounded-xl bg-black/80 shadow-lg backdrop-blur-sm">
              {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
              <div className="terminal-header flex cursor-move items-center justify-between bg-gradient-to-r from-dark to-transparent py-1 pl-4 pr-2 text-light">
                <span className="text-sm">Xron Terminal</span>
                <Dialog.Close className="p-[2px] hover:bg-red-500">
                  <CloseIcon size={18} />
                </Dialog.Close>
              </div>
              <div
                ref={terminalDiv}
                className="h-[calc(100%-40px)] overflow-y-auto overflow-x-hidden p-2 text-sm text-light"
              >
                <pre>
                  {storedValue.map((line, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <span key={index}>
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
                      className="w-[500px] border-none bg-transparent text-light outline-none placeholder:text-dark-gray"
                    />
                  </span>
                </pre>
              </div>
            </div>
          </Draggable>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Terminal;
