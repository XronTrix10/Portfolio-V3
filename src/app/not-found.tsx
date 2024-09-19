import type { JSX } from "react";
import Link from "next/link";

/**
 * Renders the not found page when the user navigates to a non-existent page.
 * @returns {JSX.Element} the not found page.
 */
const NotFound = (): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="name-color h-40 font-limelight text-9xl">
        <span className="duration-300 hover:text-[10rem] hover:text-golden-yellow">
          4
        </span>
        <span className="duration-300 hover:text-[10rem] hover:text-golden-yellow">
          0
        </span>
        <span className="duration-300 hover:text-[10rem] hover:text-golden-yellow">
          4
        </span>
      </h1>
      <p className="m-6">Could not find requested resource</p>
      <Link className="btn normal-btn" href="/home">
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
