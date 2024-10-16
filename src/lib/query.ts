// queries/userSessionProgress.ts
import { gql } from "@apollo/client";

export const USER_SESSION_PROGRESS = gql`
  query userSessionProgress($username: String!) {
    allQuestionsCount {
      difficulty
      count
    }
    matchedUser(username: $username) {
      submitStats {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
        totalSubmissionNum {
          difficulty
          count
          submissions
        }
      }
    }
  }
`;
