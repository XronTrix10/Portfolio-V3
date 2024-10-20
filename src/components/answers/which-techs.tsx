import type { JSX } from "react";

/**
 * answers/which-techs component.
 * @returns {JSX.Element} the component.
 */
const WhichTechs = (): JSX.Element => {
  return (
    <article className="qn_answer">
      <h4>Just Listing my favourites here :D</h4>
      <ul>
        <li>Next.js</li>
        <li>TypeScript</li>
        <li>TailwindCSS</li>
        <li>PostgreSQl</li>
        <li>Go</li>
        <li>Rust (Just Started)</li>
      </ul>
      ---
      <ul>
        <li>VSCode (IDE)</li>
        <li>GitHub (Hosting)</li>
        <li>Pieces (AI Helper)</li>
        <li>Bruno (API Testing)</li>
        <li>Figma (UI Design)</li>
        <li>Brave (Browser)</li>
        <li>Obsidian (Notes)</li>
      </ul>
    </article>
  );
};

export default WhichTechs;
