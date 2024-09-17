"use client";

import type { FC, JSX, ReactNode } from "react";
import { useState } from "react";

import classNames from "@/utils/class-names";
import Terminal from "@/components/terminal";

import "@/styles/questions.css";

type QuestionProps = {
  question: string;
  command: string;
  answer: ReactNode;
  className?: string;
};

/**
 * renders the question component.
 * @param {QuestionProps} props the question component props.
 * @returns {JSX.Element} the question component.
 */
const Question: FC<QuestionProps> = ({
  question,
  command,
  className = "",
  answer,
}: QuestionProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="group hover:mb-2">
      <div className={classNames("question", className)}>{question}</div>
      <div className="command-box">
        <span className="command">~$ {command}</span>
        <button className="command" onClick={() => setIsOpen(!isOpen)}>
          <span className="hover:font-semibold hover:text-light">
            Run &#9654;
          </span>
        </button>
      </div>
      <Terminal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        isInteractive={true}
        inCmd={command}
        inOutput={answer}
      />
    </div>
  );
};

export default Question;
