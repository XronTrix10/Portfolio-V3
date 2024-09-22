import type { FC, JSX } from "react";

import classNames from "@/utils/class-names";

type DividerProps = {
  className?: string;
};

/**
 * renders the Divider component.
 * @param {DividerProps} props the Divider component props.
 * @returns {JSX.Element} the Divider component.
 */
const Divider: FC<DividerProps> = ({
  className = "",
}: DividerProps): JSX.Element => {
  return (
    <div
      className={classNames(
        "bg-dark-gray h-px w-full md:h-72 2xl:h-96 md:w-px",
        className,
      )}
    />
  );
};

export default Divider;
