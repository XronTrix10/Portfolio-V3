import type { JSX } from "react";

/**
 * answers/describe-strengths component.
 * @returns {JSX.Element} the component.
 */
const Strengths = (): JSX.Element => {
  return (
    <article className="qn_answer">
      <p>My strength is me, myself. I am a resolute.</p>
      <p>
        I was a back bencher till my high school and never really cared about
        anything. Now when I look back, I feel proud of me for coming this far
        :)
      </p>
      <p>
        I believe that I can do anything I set my mind to. Self believe is my
        biggest strength
      </p>
      <p>
        My weaknesses include my little short term memory and a little
        nervousness in public speaking. Though I am working on it :D
      </p>
    </article>
  );
};

export default Strengths;
