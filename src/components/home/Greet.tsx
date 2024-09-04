import type { JSX } from "react";
import Link from "next/link";

import TextAnimate from "../ui/text-animate";

/**
 * renders the greet section.
 * @returns {JSX.Element} the greet section.
 */
const Greet = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center gap-4 text-left">
      <h2 className="text-4xl">
        <span className="greet">Hey!</span>{" "}
        <span className="identity">I&apos;m</span>
      </h2>

      <TextAnimate
        text="Xron Trix"
        type="fadeIn"
        delay={2}
        className="name-color mb-4 font-limelight text-8xl leading-none *:select-none 2xl:text-9xl"
      />

      <Link href="/overview" className="btn scout-button group mt-4">
        Scout{" "}
        <div className="duration-300 group-hover:translate-x-2">&#x27A4;</div>
      </Link>
    </div>
  );
};

export default Greet;
