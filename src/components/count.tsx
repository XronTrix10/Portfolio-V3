"use client";

import type { JSX } from "react";
import { useEffect, useState } from "react";

/**
 * Renders the visit counter component.
 * It fetches the count from the database and shows an animated count.
 * @returns {JSX.Element} the counter component.
 */
const Counter = (): JSX.Element => {
  const speed = 10;

  const [target, setTarget] = useState(100);
  const [count, setCount] = useState(1);

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
        setTarget(responseJson.count);
      } catch (error) {
        console.error(error);
      }
    };

    void fetchCount();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < target) {
        setCount(count + 1);
      } else {
        clearInterval(intervalId);
      }
    }, speed);
    return (): void => clearInterval(intervalId);
  }, [count, target, speed]);

  return (
    <div>
      <span className="text-light-gray/70">{count}</span> visits so far
    </div>
  );
};

export default Counter;
