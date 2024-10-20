import type { JSX } from "react";

/**
 * answers/whereis-xrontrix component.
 * @returns {JSX.Element} the component.
 */
const WhereisXrontrix = (): JSX.Element => {
  return (
    <article className="qn_answer">
      <p>
        XronTrix is from{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://ben10.fandom.com/wiki/Galvan_Prime_(Classic)"
        >
          Galvan Prime
        </a>
        . He was created by{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://ben10.fandom.com/wiki/Azmuth_(Classic)"
        >
          Azmuth
        </a>
        .
      </p>
      <p>
        He is an advanced humanoid with a unique ability to teleport. He travels
        the galaxy in search of new worlds to explore.
      </p>

      <p>Just Kidding :D</p>
    </article>
  );
};

export default WhereisXrontrix;
