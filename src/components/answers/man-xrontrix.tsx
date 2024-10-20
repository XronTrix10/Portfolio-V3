import type { JSX } from "react";

/**
 * answers/man-xrontrix component.
 * @returns {JSX.Element} the component.
 */
const ManXrontrix = (): JSX.Element => {
  return (
    <article className="qn_answer">
      <p>I actually do a lot more than a &quot;front-end developer&quot;.</p>
      <p>
        I was more interested and curious in <span>backends</span>,{" "}
        <span>cloud</span> and logic building. But suddenly I also became good
        at frontend development. So, I landed my <span>first job</span> as a
        front-end developer.
      </p>
      <p>
        Along with frontend, I have worked on multiple backends and full-stack
        applications. Most of them are in <span>NodeJs</span>,{" "}
        <span>MongoDB</span> or <span>SQL</span>.
      </p>
      <p>
        But, my favourite backend stack is <span>Go</span> with{" "}
        <span>PostgreSQl</span>. For frontend, I use <span>Next.js</span>,{" "}
        <span>TypeScript</span> and <span>TailwindCSS</span>
      </p>
      <p>
        Btw, this portfolio is built with Next.js and TailwindCSS, it&apos;s
        using <span>Cloudflare serverless Pages</span> and{" "}
        <span>KV database</span> :D
      </p>
    </article>
  );
};

export default ManXrontrix;
