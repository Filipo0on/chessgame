import gql from "graphql-tag";

const UPDATE_GAME = gql`
mutation startGame($id: String!, $gameStarted: Boolean) {
  startGame(
    id: $id,
    gameStarted: $gameStarted
  ) {
    id
    gameStarted
    isBlack
    isWhite
    gameType
    gameAddTime
    gameTime

  }
}
`;

export default UPDATE_GAME;