const axios = require('axios');
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLNonNull, GraphQLInt, GraphQLList } = require('graphql');
const GameType = require('./types/GameType');
const HistoryType = require('./types/HistoryType');

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
        gameStarted: { type: GraphQLBoolean }
      },
      resolve(parentValue, args, request) {
        // fake login
        if (!request.session.userId ) {
          request.session.userId = getRandomInt(1000).toString()
        }
       let userId = request.session.userId;
        return axios.patch(`http://localhost:1337/games/${args.id}`, args)
          .then(res => res.data)
      }
    },
    addGame: {
      type: GameType,
      args: { 
        id: { type: GraphQLString },
        gameType: { type: GraphQLString },
        gameStarted: { type: GraphQLBoolean },
        gameTime: { type: GraphQLInt },
        gameAddTime: { type: GraphQLInt },
        creator: { type: GraphQLString },
        isWhite: { type: GraphQLString },
       },
       resolve(parentValue, args, request) {
         // console.log("args: ", args)
         // Login if no session id,
         if (!request.session.userId ) {
           request.session.userId = getRandomInt(1000).toString()
         }
        let userId = request.session.userId;
        args.isWhite = userId;
        console.log(request.session);
        console.log("args:", args); 
        return axios.post(`http://localhost:1337/games`, args)
         .then(res => res.data);
       }
    }
  }
})

module.exports = mutation;