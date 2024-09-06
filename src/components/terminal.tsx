import type { FC, JSX } from "react";
import React, { useEffect, useRef, useState } from "react";
import { Terminal as XTerm } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import Draggable from "react-draggable";
import * as Dialog from "@radix-ui/react-dialog";

import "@xterm/xterm/css/xterm.css";
import CloseIcon from "@/assets/icons/close";

type TerminalProps = {
  isOpen: boolean;
  onClose: () => void;
};

/**
 * renders the terminal component.
 * @param {boolean} isOpen - whether the terminal is open or not.
 * @param {() => void} onClose - a function to close the terminal.
 * @returns {JSX.Element} the terminal component.
 */
const Terminal: FC<TerminalProps> = ({
  isOpen,
  onClose,
}: TerminalProps): JSX.Element => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const [terminal, setTerminal] = useState<XTerm | null>(null);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  useEffect(() => {
    if (isOpen && !terminal && terminalRef.current) {
      const term = new XTerm({
        fontFamily: "Menlo, Monaco, Courier New, monospace",
        fontSize: 14,
        theme: {
          background: "rgba(0, 0, 0, 0.7)",
        },
      });

      const fitAddon = new FitAddon();
      term.loadAddon(fitAddon);

      term.open(terminalRef.current);
      fitAddon.fit();

      term.onKey(({ key, domEvent }) => {
        const printable =
          !domEvent.altKey && !domEvent.ctrlKey && !domEvent.metaKey;

        if (domEvent.keyCode === 13) {
          // Enter key
          const command =
            term.buffer.active
              .getLine(term.buffer.active.cursorY)
              ?.translateToString()
              .trim() ?? "";
          executeCommand(command);
          setCommandHistory((prev) => [...prev, command]);
          setHistoryIndex(-1);
        } else if (domEvent.keyCode === 38) {
          // Up arrow
          navigateHistory("up");
        } else if (domEvent.keyCode === 40) {
          // Down arrow
          navigateHistory("down");
        } else if (printable) {
          term.write(key);
        }
      });

      setTerminal(term);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  /**
   * executes a command in the terminal.
   * @param {string} command - the command to execute.
   * @returns {void}
   */
  const executeCommand = (command: string): void => {
    if (!terminal) return;
    terminal.writeln("");
    if (command === "clear") {
      terminal.clear();
    } else if (command === "help") {
      terminal.writeln("Available commands: clear, help, echo, date");
    } else if (command.startsWith("echo")) {
      terminal.writeln(command.slice(5));
    } else if (command === "date") {
      terminal.writeln(new Date().toString());
    } else {
      terminal.writeln(`Command not found: ${command}`);
    }
    terminal.write("\r\n$ ");
  };

  /**
   * navigates through the command history.
   * @param {"up" | "down"} direction - the direction to navigate.
   */
  const navigateHistory = (direction: "up" | "down"): void => {
    if (!terminal) return;
    if (direction === "up" && historyIndex < commandHistory.length - 1) {
      setHistoryIndex(historyIndex + 1);
      terminal.write(commandHistory[commandHistory.length - 1 - historyIndex]);
    } else if (direction === "down" && historyIndex >= 0) {
      setHistoryIndex(historyIndex - 1);
      if (historyIndex === 0) {
        terminal.write("");
      } else {
        terminal.write(
          commandHistory[commandHistory.length - 1 - historyIndex],
        );
      }
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-0 flex items-center justify-center">
          <Draggable handle=".terminal-header">
            <div className="h-[400px] w-[600px] overflow-hidden rounded-xl bg-black/80 shadow-lg backdrop-blur-sm">
              {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
              <div className="terminal-header flex cursor-move items-center justify-between bg-gradient-to-r from-dark to-transparent py-1 pl-4 pr-2 text-light">
                <span className="text-sm">Terminal $~</span>
                <Dialog.Close className="rounded-full p-[2px] hover:bg-red-500">
                  <CloseIcon size={18} />
                </Dialog.Close>
              </div>
              <div ref={terminalRef} className="h-[calc(100%-40px)]" />
            </div>
          </Draggable>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Terminal;
