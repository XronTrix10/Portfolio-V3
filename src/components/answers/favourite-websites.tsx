import type { JSX } from "react";

/**
 * answers/favourite-websites component.
 * @returns {JSX.Element} the component.
 */
const FavWebs = (): JSX.Element => {
  return (
    <article className="qn_answer">
      <ul style={{ marginTop: "1rem" }}>
        <li>
          <a target="_blank" rel="noreferrer" href="https://quickref.me">
            QuickRef
          </a>
          - A Quick cheetsheet for me
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://nextjs.org/docs">
            Vercel Docs
          </a>
          - The Book for Next.js
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://duck.ai">
            Duck AI
          </a>{" "}
          - For quick private answers
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://linkedin.com">
            LinkedIn
          </a>{" "}
          - To connect great minds
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://leetcode.com">
            LeetCode
          </a>
          - To get better everyday
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://youtube.com">
            YouTube
          </a>{" "}
          - To watch great content
        </li>
        <li>
          <a href="https://x.com">X (Twitter)</a> - To be find Similar minds
        </li>
        <li>
          <a href="https://github.com">GitHub</a> - To explore open source
          planet
        </li>
      </ul>
    </article>
  );
};

export default FavWebs;
