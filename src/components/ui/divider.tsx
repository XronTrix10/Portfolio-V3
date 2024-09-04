import type { FC, JSX } from "react";

import classNames from "@/utils/class-names";

type dividerProps = {
  direction?: "horizontal" | "vertical";
  className?: string;
};

/**
 * renders the divider component.
 * @param {dividerProps} props the divider component props.
 * @returns {JSX.Element} the divider component.
 */
const divider: FC<dividerProps> = ({
  direction = "horizontal",
  className = "",
}: dividerProps): JSX.Element => {
  return (
    <div
      className={classNames(
        `bg-dark-gray ${direction === "horizontal" ? "h-px" : "w-px"}`,
        className,
      )}
    />
  );
};

export default divider;
