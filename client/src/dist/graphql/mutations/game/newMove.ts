import gql from 'graphql-tag';

export const NEW_MOVE = gql`
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