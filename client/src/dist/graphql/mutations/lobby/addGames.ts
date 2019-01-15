import gql from "graphql-tag";

export const ADD_GAME = gql`
  mutation addGame ($gameType: String, $gameStarted: Boolean, $gameTime: Int, $gameAddTime: Int) {
    addGame (gameType: $gameType, gameStarted: $gameStarted, gameTime: $gameTime, gameAddTime: $gameAddTime) {
        id
        gameType
        gameTime
        gameAddTime
        gameStarted
        isWhite
    }
  }
`;

// 