import type { FC, JSX } from "react";

import TextAnimate from "../ui/text-animate";

type GreetProps = {
  setScout: React.Dispatch<React.SetStateAction<boolean>>;
};

/**
 * renders the greet section.
 * @param {GreetProps} setScout the setScout function.
 * @returns {JSX.Element} the greet section.
 */
const Greet: FC<GreetProps> = ({ setScout }: GreetProps): JSX.Element => {
  return (
    <div className="flex flex-col justify-center gap-4 text-left">
      <h2 className="text-4xl">
        <span className="greet">Hey!</span>{" "}
        <span className="identity">I&apos;m</span>
      </h2>

      <TextAnimate
        text="Xron Trix"
        type="fadeIn"
        className="name-color mb-4 font-limelight text-[6rem] leading-none *:select-none"
      />

      <button
        onClick={() => setScout(true)}
        className="scout-button group mt-4"
      >
        Scout{" "}
        <div className="duration-300 group-hover:translate-x-2">&#x27A4;</div>
      </button>
    </div>
  );
};

export default Greet;
