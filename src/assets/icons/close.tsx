import type { FC, JSX } from "react";

import type { IconType } from "@/lib/@types";

/**
 * description
 * @param {IconType} props - the icon props.
 * @returns {JSX.Element} the close icon.
 */
const CloseIcon: FC<IconType> = ({ size = 24 }: IconType): JSX.Element => {
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
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
};

export default CloseIcon;
