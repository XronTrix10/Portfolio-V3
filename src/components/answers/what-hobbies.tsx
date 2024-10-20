import type { JSX } from "react";

/**
 * answers/what-hobbies component.
 * @returns {JSX.Element} the component.
 */
const WhatHobbies = (): JSX.Element => {
  return (
    <article className="qn_answer">
      <p>
        Not gonna lie, I don&apos;t like <span>reading books</span>.
      </p>
      <p>
        Whenever I&apos;m bored, I either go for <span>YouTube</span> or{" "}
        <span>movies</span> or play <span>games</span> :D
      </p>
      <p>
        Oh, and I also like to play with <span>wires</span> and{" "}
        <span>electricity</span>, though I am not an electric guy &gt;&lt;
      </p>
    </article>
  );
};

export default WhatHobbies;
