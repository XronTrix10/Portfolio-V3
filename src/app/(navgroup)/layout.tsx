"use client";

import type { FC, JSX } from "react";
import { ApolloProvider } from "@apollo/client";

import client from "@/lib/apolloClient";
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
const NavLayout: FC<NavLayoutProps> = ({
  children,
}: NavLayoutProps): JSX.Element => {
  return (
    <div>
      <Navbar />
      <div className="relative mx-auto max-w-screen-lg 2xl:max-w-screen-xl">
        <ApolloProvider client={client}>{children}</ApolloProvider>
        <Footer />
      </div>
    </div>
  );
};

export default NavLayout;
