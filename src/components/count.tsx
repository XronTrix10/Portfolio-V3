"use client";

import type { FC, JSX } from "react";
import { useEffect, useState } from "react";

type AnimatedCountProps = {
  target: number;
};

/**
 * Renders the visit counter component with loading.
 * It fetches the count from the database and shows an animated count.
 * @returns {JSX.Element} the counter component.
 */
const Counter = (): JSX.Element => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    /**
     * Fetches the count from the database.
     */
    const fetchCount = async (): Promise<void> => {
      try {
        const res = await fetch("/api/db", {
          method: "GET",
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const responseJson: { count: number } = await res.json();
        setCount(responseJson.count);
      } catch (error) {
        console.error(error);
      }
    };

    void fetchCount();
  }, []);

  if (!count) return <div>Fetching visits...</div>;

  return <AnimatedCount target={count} />;
};

/**
 * Renders the visit counter component with animation.
 * @param {AnimatedCountProps} props the component props.
 * @returns {JSX.Element} the counter component.
 */
const AnimatedCount: FC<AnimatedCountProps> = ({
  target,
}: AnimatedCountProps): JSX.Element => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const speed = target > 100 ? 10 : 100;
    const intervalId = setInterval(() => {
      if (count < target) {
        setCount(count + 1);
      } else {
        clearInterval(intervalId);
      }
    }, speed);
    return (): void => clearInterval(intervalId);
  }, [count, target]);

  return (
    <div>
      <span className="text-light-gray/70">{count}</span> visits so far
    </div>
  );
};

export default Counter;
