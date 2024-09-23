import type { Metadata } from "next";
import Head from "next/head";
import * as React from "react";
import type { JSX } from "react";
import { Inter, JetBrains_Mono, Limelight } from "next/font/google";

import "@/styles/index.css";
import "@/styles/hero.css";
import Background from "@/components/background";
import classNames from "@/utils/class-names";
import { GlobalProvider } from "@/lib/contexts/global-context";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains",
});

const limelight = Limelight({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-limelight",
});

export const metadata: Metadata = {
  title: "Xron Trix",
  description: "A portfolio website for Xron Trix",
};

/**
 * The root layout component.
 * @param {Readonly<{children: React.ReactNode;}>} props the child component.
 * @returns {JSX.Element} the root layout component.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content="Xron Trix" />
        <meta
          property="og:description"
          content="The portfolio website of Xron Trix"
        />
        <meta
          property="og:image"
          content="https://gist.github.com/user-attachments/assets/57338740-e086-4af1-bf8f-d94d66549de7"
        />
        <meta property="og:url" content="https://xrontrix.pages.dev" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@XronTrix10" />
        <meta name="twitter:creator" content="@XronTrix10" />
        <meta name="twitter:title" content="Xron Trix" />
        <meta
          name="twitter:description"
          content="The portfolio website of Xron Trix"
        />
        <meta
          name="twitter:image"
          content="https://gist.github.com/user-attachments/assets/57338740-e086-4af1-bf8f-d94d66549de7"
        />
      </Head>
      <body
        className={classNames(
          inter.variable,
          jetbrains.variable,
          limelight.variable,
        )}
      >
        <Background />
        <GlobalProvider>
          <main>{children}</main>
        </GlobalProvider>
      </body>
    </html>
  );
}
