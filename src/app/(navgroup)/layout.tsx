import type { FC, JSX } from "react";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

type NavLayoutProps = {
  children: React.ReactNode;
};

/**
 * Renders the navbar group layout.
 * It fetches the count from the database and passes it to the footer component.
 * @param {NavLayoutProps} props the layout component props.
 * @returns {JSX.Element} the layout component.
 */
const NavLayout: FC<NavLayoutProps> = async ({
  children,
}: NavLayoutProps): Promise<JSX.Element> => {
  let count = 1;

  try {
    const res = await fetch(new URL("/api/db", process.env.BASE_ORIGIN), {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseJson: { count: number } = await res.json();
    count = responseJson.count;
  } catch (error) {
    console.error(error);
  }

  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-screen-lg 2xl:max-w-screen-xl">
        {children}
        <Footer count={count} />
      </div>
    </div>
  );
};

export default NavLayout;
