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
        {/* <h1 className="name">Xron Trix</h1> */}

        <button className="w-fit border border-dark-gray bg-transparent px-3 py-2 shadow-xl transition-all duration-700 hover:bg-light hover:text-black hover:shadow-black">
          Jump -&gt;
        </button>
      </div>
    </main>
  );
};

export default Home;
