import type { JSX } from "react";

import "@/styles/hero.css";
import Greet from "@/components/home/Greet";

/**
 * renders the home page.
 * @returns {JSX.Element} the home page.
 */
const Home = (): JSX.Element => {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <Greet />
    </section>
  );
};

export default Home;
