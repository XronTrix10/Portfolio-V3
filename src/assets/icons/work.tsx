import type { FC, JSX } from "react";

import type { IconType } from "@/lib/@types";

/**
 * renders the work component.
 * @param {IconType} props the work component props.
 * @returns {JSX.Element} the work component.
 */
const WorkIcon: FC<IconType> = ({ size = 24 }: IconType): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 12.25C14.6005 12.25 12.25 14.6005 12.25 17.5C12.25 20.3995 14.6005 22.75 17.5 22.75C20.3995 22.75 22.75 20.3995 22.75 17.5C22.75 14.6005 20.3995 12.25 17.5 12.25ZM18.25 15.6992C18.25 15.285 17.9142 14.9492 17.5 14.9492C17.0858 14.9492 16.75 15.285 16.75 15.6992V17.9492C16.75 18.2 16.8753 18.4342 17.084 18.5733L18.434 19.4733C18.7786 19.703 19.2443 19.6099 19.474 19.2652C19.7038 18.9206 19.6107 18.4549 19.266 18.2252L18.25 17.5478V15.6992Z"
        fill="currentColor"
      />
      <path
        d="M11.5 1.25C12.202 1.24997 12.9887 1.24994 13.489 1.30636C14.0285 1.36718 14.5376 1.50167 15.0007 1.8313C15.4609 2.15886 15.7452 2.58653 15.9695 3.06267C16.1797 3.50911 16.3706 4.07486 16.5936 4.73559L16.704 5.06253C16.8653 5.5405 16.5892 6.05251 16.0873 6.20615C15.5855 6.35978 15.0478 6.09685 14.8865 5.61889C14.6437 4.89941 14.3894 4.15013 14.2277 3.80681C14.0751 3.48287 13.9601 3.36036 13.8578 3.28755C13.7584 3.21681 13.6129 3.15111 13.2646 3.11184C12.8898 3.06957 12.2699 3.06809 11.5 3.06809C10.7301 3.06809 10.1102 3.06957 9.73541 3.11184C9.38714 3.15111 9.24158 3.21681 9.1422 3.28755C9.03992 3.36036 8.9249 3.48287 8.77232 3.80681C8.61061 4.15013 8.35629 4.89941 8.11347 5.61889C7.95215 6.09685 7.41454 6.35978 6.91267 6.20615C6.4108 6.05251 6.13473 5.5405 6.29605 5.06253L6.40639 4.73559L6.40639 4.73558C6.62935 4.07485 6.82027 3.50911 7.03055 3.06267C7.25482 2.58653 7.53914 2.15886 7.9993 1.8313C8.46236 1.50167 8.97155 1.36718 9.51096 1.30636C10.0113 1.24994 10.798 1.24997 11.5 1.25Z"
        fill="currentColor"
      />
      <path
        d="M13.4653 4.75H9.54836C7.80421 4.74998 6.41746 4.74997 5.33103 4.89881C4.20972 5.05243 3.29737 5.37711 2.5785 6.10965C1.86155 6.84022 1.54553 7.76413 1.39567 8.89997C1.24997 10.0042 1.24999 11.5256 1.25 13.3053C1.24999 15.0851 1.24997 16.4958 1.39567 17.6C1.54553 18.7359 1.86155 19.6598 2.5785 20.3904C3.29737 21.1229 4.20972 21.4476 5.33103 21.6012C6.41745 21.75 7.80415 21.75 9.54827 21.75H12.2557C11.3142 20.5897 10.75 19.1107 10.75 17.5C10.75 13.7721 13.7721 10.75 17.5 10.75C19.1107 10.75 20.5897 11.3142 21.75 12.2557V10.9923L21.7498 10.9845C21.705 8.80913 21.5271 7.22233 20.4352 6.10965C19.7163 5.37711 18.8039 5.05243 17.6826 4.89881C16.5962 4.74997 15.2095 4.74998 13.4653 4.75Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default WorkIcon;
