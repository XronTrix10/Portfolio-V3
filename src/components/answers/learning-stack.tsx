import type { JSX } from "react";

/**
 * answers/learning-stack component.
 * @returns {JSX.Element} the component.
 */
const LearnStack = (): JSX.Element => {
  return (
    <article className="qn_answer">
      <ul>
        <li>Web3</li>
        <li>Cryptography</li>
        <li>GraphQL</li>
        <li>RabbitMQ</li>
        <li>Rust</li>
        <li>Microservices</li>
        <li>Webassembly</li>
        <li>Flutter</li>
      </ul>
    </article>
  );
};

export default LearnStack;
