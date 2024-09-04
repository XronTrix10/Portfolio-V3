import type { FC, JSX } from "react";

type UserPersonalIconProps = {
  size?: number;
};

/**
 * renders the UserPersonalIcon component.
 * @param {UserPersonalIconProps} props the UserPersonalIcon component props.
 * @returns {JSX.Element} the UserPersonalIcon component.
 */
const UserPersonalIcon: FC<UserPersonalIconProps> = ({
  size = 24,
}: UserPersonalIconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4.44248 14.6547C7.538 12.7818 11.4621 12.7818 14.5576 14.6547C14.6546 14.7134 14.7757 14.7828 14.9136 14.8618C15.5262 15.2128 16.4716 15.7545 17.1182 16.3976C17.5232 16.8005 17.917 17.3398 17.9887 18.0063C18.0651 18.7171 17.7584 19.3796 17.158 19.9609C16.1412 20.9452 14.9048 21.75 13.2968 21.75H5.70329C4.09524 21.75 2.85888 20.9452 1.84206 19.9609C1.24166 19.3796 0.934942 18.7171 1.01141 18.0063C1.0831 17.3398 1.47685 16.8005 1.88191 16.3976C2.5285 15.7545 3.47384 15.2128 4.08649 14.8618C4.22442 14.7828 4.34548 14.7134 4.44248 14.6547Z"
        fill="currentColor"
      />
      <path
        d="M4.75012 7C4.75012 4.37665 6.87677 2.25 9.50012 2.25C12.1235 2.25 14.2501 4.37665 14.2501 7C14.2501 9.62335 12.1235 11.75 9.50012 11.75C6.87677 11.75 4.75012 9.62335 4.75012 7Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9999 5C15.9999 4.44772 16.4477 4 16.9999 4L21.9999 4C22.5522 4 22.9999 4.44772 22.9999 5C22.9999 5.55229 22.5522 6 21.9999 6L16.9999 6C16.4477 6 15.9999 5.55228 15.9999 5ZM15.9999 8C15.9999 7.44772 16.4477 7 16.9999 7L21.9999 7C22.5522 7 22.9999 7.44772 22.9999 8C22.9999 8.55229 22.5522 9 21.9999 9L16.9999 9C16.4477 9 15.9999 8.55228 15.9999 8ZM18.9999 11C18.9999 10.4477 19.4477 10 19.9999 10H21.9999C22.5522 10 22.9999 10.4477 22.9999 11C22.9999 11.5523 22.5522 12 21.9999 12H19.9999C19.4477 12 18.9999 11.5523 18.9999 11Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default UserPersonalIcon;
