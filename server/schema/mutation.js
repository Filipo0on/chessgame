const axios = require('axios');
const { GraphQLObjectType, GraphQLString, GraphQLBoolean } = require('graphql');
const GameType = require('./types/GameType');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    startGame: {
      type: GameType,
      args: { 
        id: { type: GraphQLString },
        gameStarted: { type: GraphQLBoolean }
      },
      resolve(parentValue, args) {
        return axios.patch(`http://localhost:1337/games/${args.id}`, args)
          .then(res => res.data)
      }
    }
  }
})

module.exports = mutation;