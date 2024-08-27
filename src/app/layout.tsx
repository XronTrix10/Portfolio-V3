import type { Metadata } from "next";
import * as React from "react";
import type { JSX } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";

import "@/styles/main.css";

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

export const fonts = { inter, jetbrains };

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
      <body className={jetbrains.variable}>
        <Background />
        {children}
      </body>
    </html>
  );
}
