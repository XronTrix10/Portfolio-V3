import type { JSX } from "react";

/**
 * answers/which-books component.
 * @returns {JSX.Element} the component.
 */
const WhichBooks = (): JSX.Element => {
  return (
    <article className="qn_answer">
      <p>As I said, I don&apos;t like reading books :D</p>
      <p>
        But, I do love reading PDFs about some cryspy stuff. Like -
        <span>Blockchain</span>, <span>Cryptography</span>,{" "}
        <span>Algorithms</span>, <span>New Technologies</span>. And sometimes{" "}
        <span>Interview questions</span> :)
      </p>
    </article>
  );
};

export default WhichBooks;
