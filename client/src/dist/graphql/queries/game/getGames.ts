import gql from "graphql-tag";

export const GET_GAMES = gql`
  query getGames {
    getGames {
      id
      gameType
      gameTime
      gameAddTime
      gameStarted
      creator
      opponent
      isWhite
      history {
        color
        from
        to
        piece
        san
      }
    }
    getGame(id: "1"){
      id
      creator
    }
  }
`;