"use client";

import type { JSX } from "react";

import "@/styles/hero.css";
import { useGlobalContext } from "@/lib/contexts/global-context";
import Greet from "@/components/home/Greet";

/**
 * renders the home page.
 * @returns {JSX.Element} the home page.
 */
const Home = (): JSX.Element => {
  const { scout, setScout } = useGlobalContext();

  console.log(scout);

  return (
    <section className="flex min-h-screen items-center justify-center">
      {scout ? <p>Scout</p> : <Greet setScout={setScout} />}
    </section>
  );
};

export default Home;
