export type UserData = {
  allQuestionsCount: [
    {
      difficulty: "All";
      count: number;
    },
    {
      difficulty: "Easy";
      count: number;
    },
    {
      difficulty: "Medium";
      count: number;
    },
    {
      difficulty: "Hard";
      count: number;
    },
  ];
  matchedUser: {
    submitStats: {
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
  };
};
