import gql from "graphql-tag";

export const ADD_MESSAGE = gql`
  mutation addMessage( $message: String! $user: String! $gameId: String! $createdAt: String) {
    addMessage(
      message: $message, 
      user: $user, 
      gameId: $gameId, 
      createdAt: $createdAt) {
        id
        message
        user
        gameId
        createdAt
      }
  }
`;