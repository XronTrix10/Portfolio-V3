import type { FC } from "react";

/**
 * renders the home page.
 * @returns {FC} the home page.
 */
const Home: FC = () => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-6xl font-semibold md:text-9xl">Hey!</h1>
    </main>
  );
};

export default Home;
