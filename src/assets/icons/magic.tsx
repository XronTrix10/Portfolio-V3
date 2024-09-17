import type { FC, JSX } from "react";

import type { IconType } from "@/lib/@types";

/**
 * renders the magic icon.
 * @param {IconType} props - the icon props.
 * @returns {JSX.Element} the magic icon.
 */
const MagicIcon: FC<IconType> = ({ size = 24 }: IconType): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10 6.25C9.68617 6.25 9.40552 6.4454 9.29661 6.73972L8.78077 8.13378C8.08054 10.0261 7.79598 10.7489 7.27245 11.2725C6.74893 11.796 6.02612 12.0805 4.13378 12.7808L2.73972 13.2966C2.4454 13.4055 2.25 13.6862 2.25 14C2.25 14.3138 2.4454 14.5945 2.73972 14.7034L4.13378 15.2192C6.02612 15.9195 6.74893 16.204 7.27245 16.7275C7.79598 17.2511 8.08054 17.9739 8.78077 19.8662L9.29661 21.2603C9.40552 21.5546 9.68617 21.75 10 21.75C10.3138 21.75 10.5945 21.5546 10.7034 21.2603L11.2192 19.8662C11.9195 17.9739 12.204 17.2511 12.7275 16.7275C13.2511 16.204 13.9739 15.9195 15.8662 15.2192L17.2603 14.7034C17.5546 14.5945 17.75 14.3138 17.75 14C17.75 13.6862 17.5546 13.4055 17.2603 13.2966L15.8662 12.7808C13.9739 12.0805 13.2511 11.796 12.7275 11.2725C12.204 10.7489 11.9195 10.0261 11.2192 8.13378L10.7034 6.73972C10.5945 6.4454 10.3138 6.25 10 6.25Z"
        fill="currentColor"
      />
      <path
        d="M18 2.25C17.6862 2.25 17.4055 2.4454 17.2966 2.73972L17.0755 3.33717C16.7618 4.18495 16.6705 4.38548 16.528 4.528C16.3855 4.67053 16.185 4.76183 15.3372 5.07553L14.7397 5.29661C14.4454 5.40552 14.25 5.68617 14.25 6C14.25 6.31383 14.4454 6.59448 14.7397 6.70339L15.3372 6.92447C16.185 7.23817 16.3855 7.32947 16.528 7.47199C16.6705 7.61452 16.7618 7.81505 17.0755 8.66283L17.2966 9.26028C17.4055 9.5546 17.6862 9.75 18 9.75C18.3138 9.75 18.5945 9.5546 18.7034 9.26028L18.9245 8.66283C19.2382 7.81505 19.3295 7.61452 19.472 7.47199C19.6145 7.32947 19.8151 7.23817 20.6628 6.92447L21.2603 6.70339C21.5546 6.59448 21.75 6.31383 21.75 6C21.75 5.68617 21.5546 5.40552 21.2603 5.29661L20.6628 5.07553C19.8151 4.76183 19.6145 4.67053 19.472 4.528C19.3295 4.38548 19.2382 4.18495 18.9245 3.33717L18.7034 2.73972C18.5945 2.4454 18.3138 2.25 18 2.25Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MagicIcon;
