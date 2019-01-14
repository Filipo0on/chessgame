const axios = require('axios');
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLNonNull } = require('graphql');
const GameType = require('./types/GameType');
const MessageType = require('./types/MessageType');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    startGame: {
      type: GameType,
      args: { 
        id: { type: new GraphQLNonNull(GraphQLString) },
        gameStarted: { type: GraphQLBoolean }
      },
      resolve(parentValue, args) {
        return axios.patch(`http://localhost:1337/games/${args.id}`, args)
          .then(res => res.data)
      }
    },
    addMessage: {
      type: MessageType,
      args: { 
        message: { type: new GraphQLNonNull(GraphQLString) },
        user: { type: new GraphQLNonNull(GraphQLString) },
        gameId: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, args) {
        console.log('args', args)
        return axios.put(`http://localhost:1337/messages`, args)
          .then(res => {
            console.log('res data', res.data)
            return res.data})
      }
    }
  }
})

module.exports = mutation;