import type { JSX } from "react";

/**
 * answers/which-role component.
 * @returns {JSX.Element} the component.
 */
const WhichRole = (): JSX.Element => {
  return (
    <article className="qn_answer">
      <p>
        Currently, I&apos;m a front-end developer intern at{" "}
        <a href="https://in.linkedin.com/company/pegnamindiapvtltd">Pegman</a>{" "}
        ;)
      </p>
    </article>
  );
};

export default WhichRole;
