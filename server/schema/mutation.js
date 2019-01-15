const axios = require('axios');
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLNonNull } = require('graphql');
const GameType = require('./types/GameType');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    startGame: {
      type: GameType,
      args: { 
        id: { type: new GraphQLNonNull(GraphQLString) },
        gameStarted: { type: GraphQLBoolean },
        isBlack: { type: GraphQLString}
      },
      resolve(parentValue, args, request) {
        if (!request.session.userId ) {
          request.session.userId = getRandomInt(1000).toString()
        }
       let userId = request.session.userId;
       args.isBlack = userId;
        return axios.patch(`http://localhost:1337/games/${args.id}`, args)
          .then(res => res.data)
      }
    }
  }
})

module.exports = mutation;