"use client";

import type { FC, JSX } from "react";
import { useEffect, useState } from "react";

import classNames from "@/utils/class-names";

type blinkingCursorProps = {
  className?: string;
  text: string;
};

/**
 * renders the blinking-cursor component.
 * @param {blinkingCursorProps} props the blinking-cursor component props.
 * @returns {JSX.Element} the blinking-cursor component.
 */
const BlinkingCursor: FC<blinkingCursorProps> = ({
  className = "",
  text,
}: blinkingCursorProps): JSX.Element => {
  const [showCursor, setShowCursor] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prevState) => !prevState);
    }, 700); // Blink every 500 milliseconds (0.5 seconds)

    return (): void => clearInterval(interval);
  }, []);

  return (
    <span
      className={classNames(
        `${showCursor ? "animate-blink" : ""} font-inter text-light`,
        className,
      )}
    >
      {text}
    </span>
  );
};

export default BlinkingCursor;
