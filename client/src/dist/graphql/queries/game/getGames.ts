import gql from "graphql-tag";

export const GET_GAMES = gql`
  query getGames {
    getGames {
      id
      gameType
      gameTime
      gameAddTime
      gameStarted
      isBlack
      isWhite
      history {
        color
        from
        to
        piece
        san
        fen
      }
    }
    getGame(id: "1"){
      id
      history {
        color
        from
        to
        piece
        san
        fen
        captured
      }
    }
  }
`;