import type { FC, JSX } from "react";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
        <Footer count={78} />
      </div>
    </div>
  );
};

export default NavLayout;
