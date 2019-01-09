import gql from "graphql-tag";

export const GET_GAMES = gql`
  query getGames {
    getGames {
      id
      gameStarted
    }
  }
`;