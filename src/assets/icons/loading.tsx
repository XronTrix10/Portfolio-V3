import type { FC, JSX } from "react";

import type { IconType } from "@/lib/@types";

/**
 * renders the LoadingIcon component.
 * @param {IconType} props the LoadingIcon component props.
 * @returns {JSX.Element} the LoadingIcon component.
 */
const LoadingIcon: FC<IconType> = ({ size = 24 }: IconType): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      //   className="lucide lucide-loader-circle"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
};

export default LoadingIcon;
