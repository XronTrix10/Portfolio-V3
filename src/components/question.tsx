import type { FC, JSX } from "react";

import classNames from "@/utils/class-names";

import "@/styles/questions.css";

type QuestionProps = {
  question: string;
  command: string;
  answer: string;
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
  answer,
  className = "",
}: QuestionProps): JSX.Element => {
  return (
    <div className={classNames("question", className)}>
      {question}
      {command}
      {answer}
    </div>
  );
};

export default Question;
