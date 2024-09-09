import type { ReactNode } from "react";

/**
 * Terminal commands.
 * @type {object} questions as string and answers as React.ReactNode.
 */
export const questions: {
  question: string;
  command: string;
  answer: ReactNode;
}[] = [
  {
    question: "Who/What is Xron Trix?!",
    command: "whois xrontrix --verbose",
    answer: (
      <div>
        I&apos;m a front-end developer with a passion for developing full-stack
        applications.
      </div>
    ),
  },
  {
    question: "What I actually do?",
    command: "man xrontrix",
    answer: (
      <div>
        Though I&apos;m a front-end developer, I&apos;m also a full-stack
        developer with experience in React, Next.js, and TypeScript.
      </div>
    ),
  },
  {
    question: "Skills? Experience?",
    command: "info xrontrix",
    answer: (
      <div>
        I got my Bachelor&apos;s degree in Computer Science from the University
        of California, Berkeley. I&apos;ve also completed a Master&apos;s degree
        in Computer Science from the University of California, San Diego.
      </div>
    ),
  },
  {
    question: "Where I'm from?",
    command: "whereis xrontrix",
    answer: <div>I live in the United States, specifically in California.</div>,
  },
  {
    question: "What is my current role?",
    command: "which role",
    answer: (
      <div>
        I&apos;m a front-end developer with a passion for developing full-stack
        applications.
      </div>
    ),
  },
  {
    question: "Strengths and weaknesses?",
    command: "describe --strengths --weakness",
    answer: (
      <div>
        My strengths include my ability to develop full-stack applications and
        my passion for front-end development.
      </div>
    ),
  },
  {
    question: "Favorite technologies?",
    command: "which techs",
    answer: (
      <div>
        I&apos;m a front-end developer with a passion for developing full-stack
        applications.
      </div>
    ),
  },
  {
    question: "Which Operating System do I use?",
    command: "which os",
    answer: <div>I use Windows 10.</div>,
  },
  {
    question: "Favorite tools?",
    command: "ls /tools | head -n 10",
    answer: <div>I use Visual Studio Code as my primary code editor.</div>,
  },
  {
    question: "Favorite websites?",
    command: "cat web.txt | tail -n 10",
    answer: <div>I love to browse websites and learn new things.</div>,
  },
  {
    question: "Hobbies?",
    command: "what hobbies",
    answer: <div>I love to read books and watch movies.</div>,
  },
  {
    question: "Favorite books?",
    command: "which books",
    answer: (
      <div>I love reading books about history, philosophy, and science.</div>
    ),
  },
  {
    question: "Favorite movies?",
    command: "which movies",
    answer: (
      <div>I love watching movies about adventure, romance, and comedy.</div>
    ),
  },
  {
    question: "What is my favorite quote?",
    command: "cat quotes.txt | tail -n 1",
    answer: (
      <div>
        &quot;The best way to predict the future is to invent it.&quot; - Alan
        Kay
      </div>
    ),
  },
];
