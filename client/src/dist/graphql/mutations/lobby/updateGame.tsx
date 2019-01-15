import gql from "graphql-tag";

const UPDATE_GAME = gql`
mutation startGame($id: String!, $gameStarted: Boolean) {
  startGame(
    id: $id,
    gameStarted: $gameStarted
  ) {
    id
    gameStarted
  }
}
`;

export default UPDATE_GAME;