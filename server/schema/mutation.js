const axios = require('axios');
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLNonNull, GraphQLList } = require('graphql');
const GameType = require('./types/GameType');
const HistoryType = require('./types/HistoryType');

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
    newMove: {
      type: GameType,
      args: { 
        id: { type: new GraphQLNonNull(GraphQLString) },
        fen: { type: GraphQLString },
        color: { type: GraphQLString }
        
      },
      resolve(parentValue, args) {
        return axios.patch(`http://localhost:1337/games/${args.id}`, args)
          .then(res => res.data)
      }
    }
  }
})

module.exports = mutation;