import type { FC, JSX } from "react";

import type { IconType } from "@/lib/@types";

/**
 * renders the LeetcodeIcon component.
 * @param {IconType} props the LeetcodeIcon component props.
 * @returns {JSX.Element} the LeetcodeIcon component.
 */
const LeetcodeIcon: FC<IconType> = ({ size = 24 }: IconType): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14.5499 3.71568C14.9451 3.32994 14.9528 2.69683 14.5671 2.30157C14.1814 1.90631 13.5483 1.89859 13.153 2.28432L3.93078 11.2843C2.68974 12.4955 2.68974 14.4694 3.93078 15.6806L9.4857 21.1016C10.7131 22.2995 12.6932 22.2995 13.9206 21.1016L16.6981 18.3911C17.0934 18.0054 17.1011 17.3722 16.7154 16.977C16.3296 16.5817 15.6965 16.574 15.3012 16.9597L12.5238 19.6703C12.0733 20.1099 11.333 20.1099 10.8826 19.6703L5.32764 14.2492C4.89079 13.8229 4.89079 13.142 5.32764 12.7157L10.9036 7.27409C11.3558 6.85504 12.0799 6.86187 12.5233 7.29457L15.3007 10.0051C15.696 10.3908 16.3291 10.3831 16.7148 9.98786C17.1006 9.5926 17.0929 8.95948 16.6976 8.57375L13.9201 5.86321C13.6434 5.59313 13.3284 5.38395 12.9923 5.23566L14.5499 3.71568Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 13C10 12.4477 10.4477 12 11 12H20C20.5523 12 21 12.4477 21 13C21 13.5523 20.5523 14 20 14H11C10.4477 14 10 13.5523 10 13Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LeetcodeIcon;
