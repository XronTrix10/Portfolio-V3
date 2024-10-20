export type UserData = {
  solvedProblem: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acSubmissionNum: [
    {
      difficulty: "All";
      count: number;
      submissions: number;
    },
    {
      difficulty: "Easy";
      count: number;
      submissions: number;
    },
    {
      difficulty: "Medium";
      count: number;
      submissions: number;
    },
    {
      difficulty: "Hard";
      count: number;
      submissions: number;
    },
  ];
  totalSubmissionNum: [
    {
      difficulty: "All";
      count: number;
      submissions: number;
    },
    {
      difficulty: "Easy";
      count: number;
      submissions: number;
    },
    {
      difficulty: "Medium";
      count: number;
      submissions: number;
    },
    {
      difficulty: "Hard";
      count: number;
      submissions: number;
    },
  ];
};
