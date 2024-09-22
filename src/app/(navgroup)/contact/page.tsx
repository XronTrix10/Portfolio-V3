import type { JSX } from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

/**
 * Thie dynamic function imports the ContactSection component dynamically and disables SSR.
 * It is used to avoid SSR Hydration error as this section uses local storage from client side.
 */
const ContactSection = dynamic(() => import("@/components/contact-section"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Contact",
  description: "The contact page for xrontrix portfolio",
};

/**
 * Renders the contact page section.
 * @returns {JSX.Element} the projects page.
 */
const Page = (): JSX.Element => {
  return (
    <div className="grid min-h-screen place-content-center">
      <ContactSection />
    </div>
  );
};

export default Page;
