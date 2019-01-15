import gql from 'graphql-tag';

export const ADD_MOVE_HISTORY = gql`
mutation newMove($id: String! $history: [CreateUserInput] ) {
    newMove(id: $id, history: $history ) {
      id
      history {
        color
        from
        to
        piece
        flags
        san
        fen
      }
    }
  }
`