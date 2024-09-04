import type { FC, JSX } from "react";

type downArrowProps = {
  size?: number;
};

/**
 * renders the down-arrow component.
 * @param {downArrowProps} props the down-arrow component props.
 * @returns {JSX.Element} the down-arrow component.
 */
const DownArrow: FC<downArrowProps> = ({
  size = 24,
}: downArrowProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5.99977 9.00005L11.9998 15L17.9998 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="16"
      />
    </svg>
  );
};

export default DownArrow;
