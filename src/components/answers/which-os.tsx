import type { JSX } from "react";

/**
 * answers/which-os component.
 * @returns {JSX.Element} the component.
 */
const WhichOS = (): JSX.Element => {
  return (
    <article className="qn_answer">
      <p>I use Windows 11 for gaming &gt;&lt;</p>
      <p>
        And <span>Debian based</span> distro (mainly Zorin OS) for everything
        else :D
      </p>

      <p>My fav distro till now are - </p>

      <ul>
        <li>
          <span>Zorin OS</span>
        </li>
        <li>
          <span>Deepin OS</span>
        </li>
        <li>
          <span>Kali</span>
        </li>
        <li>
          <span>Archcraft</span>
        </li>
        <li>
          <span>Garuda Linux</span>
        </li>
      </ul>
    </article>
  );
};

export default WhichOS;
