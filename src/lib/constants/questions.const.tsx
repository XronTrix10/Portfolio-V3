import type { ReactNode } from "react";

import "@/styles/questions.css";

import {
  FavQuotes,
  FavWebs,
  InfoXrontrix,
  LearnStack,
  ManXrontrix,
  Strengths,
  WhatHobbies,
  WhereisXrontrix,
  WhichBooks,
  WhichOS,
  WhichRole,
  WhichTechs,
  WhoisXrontrix,
} from "@/components/answers";

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
    answer: <WhoisXrontrix />,
  },
  {
    question: "What I actually do?",
    command: "man xrontrix",
    answer: <ManXrontrix />,
  },
  {
    question: "Skills? Experience?",
    command: "info xrontrix --format=table",
    answer: <InfoXrontrix />,
  },
  {
    question: "Where I'm from?",
    command: "whereis xrontrix",
    answer: <WhereisXrontrix />,
  },
  {
    question: "What is my current role?",
    command: "which role",
    answer: <WhichRole />,
  },
  {
    question: "Strengths and weaknesses?",
    command: "describe --strengths --weakness",
    answer: <Strengths />,
  },
  {
    question: "Favorite technologies?",
    command: "which techs --format=list",
    answer: <WhichTechs />,
  },
  {
    question: "Which Operating System do I use?",
    command: "which os",
    answer: <WhichOS />,
  },
  {
    question: "Favorite websites?",
    command: "cat web.txt | tail -n 10",
    answer: <FavWebs />,
  },
  {
    question: "Hobbies?",
    command: "what hobbies",
    answer: <WhatHobbies />,
  },
  {
    question: "Learning Stack?",
    command: "ls -laR /upcoming --format=list",
    answer: <LearnStack />,
  },
  {
    question: "Favorite books?",
    command: "which books",
    answer: <WhichBooks />,
  },
  // {
  //   question: "Favorite movies?",
  //   command: "which movies",
  //   answer: (
  //     <article className="qn_answer">
  //       <p>I love watching movies about adventure, romance, and comedy.</p>
  //     </article>
  //   ),
  // },
  {
    question: "Favorite quotes/lines?",
    command: "cat quotes.txt | tail -n 13",
    answer: <FavQuotes />,
  },
];
