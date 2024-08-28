import type { FC } from "react";

import { TextAnimate } from "@/components/ui/text-animate";
import "@/styles/hero.css";
/**
 * renders the home page.
 * @returns {FC} the home page.
 */
const Home: FC = () => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col justify-center gap-4 text-left">
        <h2 className="text-4xl">
          <span className="greet">Hey!</span>{" "}
          <span className="identity">I&apos;m</span>
        </h2>

        <TextAnimate
          text="Xron Trix"
          type="fadeIn"
          className="name-color mb-4 font-limelight text-[6rem] leading-none"
        />

        <button className="identity group mt-4 flex size-auto w-24 items-center gap-x-2 border border-dark-gray bg-transparent px-3 py-2 shadow-xl transition-all duration-300 hover:w-[6.7rem] hover:bg-light/10 hover:shadow-black">
          Scout{" "}
          <div className="duration-300 group-hover:translate-x-2">&#x27A4;</div>
        </button>
      </div>
    </main>
  );
};

export default Home;
