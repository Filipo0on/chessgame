import gql from "graphql-tag";

export const GET_MESSAGES = gql`
  query getMessages {
    getMessages {
      id
      gameId
      user
      message
      createdAt
    }
  }
`;