import type { JSX } from "react";
import Link from "next/link";

import TextAnimate from "@/components/ui/text-animate";

/**
 * renders the home page.
 * @returns {JSX.Element} the home page.
 */
const Home = (): JSX.Element => {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="flex -translate-y-10 flex-col justify-center gap-4 text-left md:translate-y-0">
        <h2 className="text-xl md:text-4xl">
          <span className="greet">Hey!</span>{" "}
          <span className="identity">I&apos;m</span>
        </h2>

        <TextAnimate
          text="Xron Trix"
          type="fadeIn"
          delay={2}
          className="name-color mb-4 font-limelight text-6xl leading-none *:select-none md:text-8xl 2xl:text-9xl"
        />

        <Link href="/home" className="btn scout-button group mt-2 md:mt-4">
          Scout{" "}
          <div className="duration-300 group-hover:translate-x-2">&#x27A4;</div>
        </Link>
      </div>
    </section>
  );
};

export default Home;
