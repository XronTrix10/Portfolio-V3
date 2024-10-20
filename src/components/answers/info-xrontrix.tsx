import type { JSX } from "react";

/**
 * answers/info-xrontrix component.
 * @returns {JSX.Element} the component.
 */
const InfoXrontrix = (): JSX.Element => {
  return (
    <article className="qn_answer">
      {/* Basics table */}
      <h4>Basics</h4>

      <table>
        <thead>
          <tr>
            <th>Technology</th>
            <th>Experience</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HTML, CSS</td>
            <td>5 Yr+ Experience</td>
          </tr>
          <tr>
            <td>Bash</td>
            <td>2 Yr+ Experience</td>
          </tr>
          <tr>
            <td>Git</td>
            <td>3.5 Yr+ Experience</td>
          </tr>
          <tr>
            <td>C, C++, Python</td>
            <td>5 Yr+ Experience</td>
          </tr>
        </tbody>
      </table>

      {/* Front-end table */}
      <h4>Front-end</h4>

      <table>
        <thead>
          <tr>
            <th>Technology</th>
            <th>Experience</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>JavaScript (ES6+)</td>
            <td>4 Yr+ Experience</td>
          </tr>
          <tr>
            <td>React</td>
            <td>2.5 Yr+ Experience</td>
          </tr>
          <tr>
            <td>Next.js</td>
            <td>2 Yr+ Experience</td>
          </tr>
          <tr>
            <td>TypeScript</td>
            <td>2 Yr+ Experience</td>
          </tr>
          <tr>
            <td>TailwindCSS</td>
            <td>2.5 Yr+ Experience</td>
          </tr>
        </tbody>
      </table>

      {/* Back-end table */}
      <h4>Back-end</h4>

      <table>
        <thead>
          <tr>
            <th>Technology</th>
            <th>Experience</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NodeJs</td>
            <td>3 Yr+ Experience</td>
          </tr>
          <tr>
            <td>Go</td>
            <td>1 Yr+ Experience</td>
          </tr>
          <tr>
            <td>Cloudflare Workers</td>
            <td>3 Yr+ Experience</td>
          </tr>
        </tbody>
      </table>

      <h4>Database</h4>

      <table>
        <thead>
          <tr>
            <th>Technology</th>
            <th>Experience</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PostgreSQL</td>
            <td>2 Yr+ Experience</td>
          </tr>
          <tr>
            <td>MongoDB</td>
            <td>2.5 Yr+ Experience</td>
          </tr>
          <tr>
            <td>SQL</td>
            <td>2.5 Yr+ Experience</td>
          </tr>
          <tr>
            <td>Cloudflare KV, D1 (SQLite)</td>
            <td>2 Yr+ Experience</td>
          </tr>
        </tbody>
      </table>

      {/* Other table */}
      <h4>Other Essentials</h4>

      <table>
        <thead>
          <tr>
            <th>Skill</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data structure & Algorithms</td>
            <td>Leetcode 100+ Solutions</td>
          </tr>
          <tr>
            <td>Computer Network</td>
            <td>Intermediate</td>
          </tr>
          <tr>
            <td>Linux</td>
            <td>Debian, Arch (3 Yr+ Experience)</td>
          </tr>
          <tr>
            <td>Cryptography, Encryption</td>
            <td>In Progress</td>
          </tr>
          <tr>
            <td>DevOps</td>
            <td>In Progress</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
};

export default InfoXrontrix;
