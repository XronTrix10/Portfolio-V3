"use client";

// components/UserSessionProgress.tsx

import React from "react";
import { useQuery } from "@apollo/client";

import { USER_SESSION_PROGRESS } from "@/lib/query";

/**
 * This component renders the user session progress for a given username.
 * @param {React.FC<{ username: string }>} props the component props.
 * @returns {React.ReactElement} the component.
 */
const UserSessionProgress: React.FC<{ username: string }> = ({ username }) => {
  const { loading, error, data } = useQuery(USER_SESSION_PROGRESS, {
    variables: { username },
  });

  console.log(data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Render the data
  return (
    <div>
      {JSON.stringify(data)}
      {/* <h2>User Session Progress for {username}</h2>
      <h3>All Questions Count</h3>
      <ul>
        {data.allQuestionsCount.map((item: any) => (
          <li key={item.difficulty}>
            Difficulty: {item.difficulty}, Count: {item.count}
          </li>
        ))}
      </ul>
      <h3>Submission Stats</h3>
      <h4>AC Submission Number</h4>
      <ul>
        {data.matchedUser.submitStats.acSubmissionNum.map((item: any) => (
          <li key={item.difficulty}>
            Difficulty: {item.difficulty}, Count: {item.count}, Submissions:{" "}
            {item.submissions}
          </li>
        ))}
      </ul>
      <h4>Total Submission Number</h4>
      <ul>
        {data.matchedUser.submitStats.totalSubmissionNum.map((item: any) => (
          <li key={item.difficulty}>
            Difficulty: {item.difficulty}, Count: {item.count}, Submissions:{" "}
            {item.submissions}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default UserSessionProgress;
