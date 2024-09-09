import type { JSX } from "react";
import Link from "next/link";

import Divider from "@/components/ui/divider";
import DownArrow from "@/assets/icons/down-arrow";
import BlinkingCursor from "@/components/ui/blinking-cursor";
import Question from "@/components/question";
import { questions } from "@/lib/constants/questions.const";

/**
 * renders the home page.
 * @returns {JSX.Element} the home page.
 */
const page = (): JSX.Element => {
  return (
    <div className="flex min-h-screen grow flex-row items-center justify-center gap-x-12 2xl:gap-x-20">
      <div className="flex w-1/2 flex-col px-2 text-dark-gray 2xl:px-6 2xl:text-lg">
        <article>
          <span className="font-inter text-5xl text-light 2xl:text-6xl">I</span>{" "}
          am a<span className="text-light"> front-end</span> developer with a
          passion for developing <span className="text-light"> full-stack</span>{" "}
          applications.
        </article>

        <article className="mt-6">
          With <span className="text-white"> 3+ years</span> of experience in{" "}
          <span className="text-light"> JavaScript</span> and{" "}
          <span className="text-light"> TypeScript</span>, I have built multiple
          responsive and interactive user interfaces
          <BlinkingCursor text="_" className="font-bold" />
        </article>

        <div className="self-center p-4 duration-200 hover:text-light-gray">
          <DownArrow />
        </div>

        {/* <article>
          and <span className="text-light"> Next.js</span>, and am familiar with{" "}
          <span className="text-light"> Tailwind CSS</span> and{" "}
          <span className="text-light"> CSS Modules</span>.
        </article> */}
      </div>

      <Divider direction="vertical" className="h-72 self-center 2xl:h-96" />

      <div className="w-1/2">
        <h3 className="px-2 font-inter text-4xl font-medium text-light 2xl:text-[2.5rem]">
          Curious Questions
        </h3>

        <div className="relative mt-10">
          {/* <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-dark to-transparent" /> */}
          <ol className="flex max-h-72 flex-col gap-y-4 overflow-y-auto px-2 pb-12 text-light-gray 2xl:max-h-80">
            {questions.map((question, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`${question.question[0]}-${index}`}>
                <Question
                  question={question.question}
                  command={question.command}
                  answer={""}
                />
              </li>
            ))}
            <li className="mx-auto my-4 flex w-fit gap-x-2 text-center text-sm 2xl:text-base">
              Didn&apos;t find your answer? <br />{" "}
              <Link href={"/contact"} className="text-light hover:underline">
                Ask me!
              </Link>
            </li>
          </ol>
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-dark to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default page;
