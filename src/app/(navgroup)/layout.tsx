import type { FC, JSX } from "react";

import Navbar from "@/components/navbar";

type NavLayoutProps = {
  children: React.ReactNode;
};

/**
 * renders the layout component.
 * @param {NavLayoutProps} props the layout component props.
 * @returns {JSX.Element} the layout component.
 */
const NavLayout: FC<NavLayoutProps> = ({
  children,
}: NavLayoutProps): JSX.Element => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-screen-lg 2xl:max-w-screen-xl">
        {children}
      </div>
    </div>
  );
};

export default NavLayout;
