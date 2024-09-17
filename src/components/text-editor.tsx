import React, { useState } from "react";
import type { FC, JSX } from "react";

type TextEditorProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

/**
 * Renders a text editor component.
 * @param {TextEditorProps} props - The text editor component props.
 * @returns {JSX.Element} The text editor component.
 */
const TextEditor: FC<TextEditorProps> = ({
  text,
  setText,
}: TextEditorProps): JSX.Element => {
  const [internalText, setInternalText] = useState(text);

  /**
   * Handles the input event and updates the state with the current text.
   * @param {React.FormEvent<HTMLDivElement>} e - The input event.
   */
  const handleInput = (e: React.FormEvent<HTMLDivElement>): void => {
    setInternalText(e.currentTarget.innerText.split("").reverse().join(""));
    // console.log(e.currentTarget.innerText);
    setText(e.currentTarget.innerText.split("").reverse().join(""));
  };

  return (
    <div
      className="h-40 w-full rounded-lg border border-gray-300 p-4 focus:border-blue-500 focus:outline-none"
      contentEditable="true"
      suppressContentEditableWarning={true}
      onInput={handleInput}
    >
      {internalText}
    </div>
  );
};

export default TextEditor;
