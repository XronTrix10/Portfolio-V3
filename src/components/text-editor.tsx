"use client";

import type { ChangeEvent, FC, JSX } from "react";
import { useRef, useState } from "react";

import useCursor from "@/lib/hooks/useCursor.hook";

import "@/styles/texteditor.css";

/**
 * Renders the text editor component.
 * @returns {JSX.Element} the text editor component.
 */
const TextEditor: FC = (): JSX.Element => {
  const [content, setContent] = useState("");
  const {
    handleOnFocus: handleOnFocusCursor,
    handleOnBlur,
    handleKeyDown,
    shifts,
    paused,
  } = useCursor(content);

  const refInput = useRef<HTMLInputElement>(null);

  /**
   * Handles the text editor input change.
   * @param {ChangeEvent<HTMLInputElement>} event the text editor input change event.
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setContent(event.target.value);
  };

  /**
   * Handles the text editor submit.
   */
  const handleOnFocusLabel = (): void => {
    refInput.current?.focus();
    handleOnFocusCursor();
  };

  const cursorPosition = content.length - shifts;

  const [beforeCursor, inCursor, afterCursor] = [
    content.slice(0, cursorPosition),
    content.charAt(cursorPosition),
    content.slice(cursorPosition + 1),
  ];

  return (
    <div className="grid min-h-56 place-content-center">
      <label className="label" onClick={handleOnFocusLabel}>
        <span className={`input-mirror ${!paused ? "blink" : ""}`}>
          {beforeCursor}
          <span>{inCursor}</span>
          {afterCursor}
        </span>
        <input
          ref={refInput}
          autoFocus
          className="input-hidden"
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          onBlur={handleOnBlur}
        />
      </label>
    </div>
  );
};

export default TextEditor;
