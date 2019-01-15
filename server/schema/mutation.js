const axios = require('axios');
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLNonNull, GraphQLInt, GraphQLList, GraphQLID } = require('graphql');
const GameType = require('./types/GameType');
const MessageType = require('./types/MessageType');
const dbConfig = require('./../config')
const HistoryInput = require('./types/HistoryInput')

const apiUrl =  dbConfig.dbPath;
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
        return axios.patch(`http://localhost:1337/games/${args.id}`, args)
          .then(res => res.data)
      }
    },
    addGame: {
      type: GameType,
      args: { 
        id: { type: GraphQLID },
        gameType: { type: GraphQLString },
        gameStarted: { type: GraphQLBoolean },
        gameTime: { type: GraphQLInt },
        gameAddTime: { type: GraphQLInt },
        isWhite: { type: GraphQLString },
       },
       resolve(parentValue, args, request) {
         if (!request.session.userId ) {
           request.session.userId = getRandomInt(1000).toString()
         }
        let userId = request.session.userId;
        args.isWhite = userId;
        return axios.post(`http://localhost:1337/games`, args)
         .then(res => res.data);
       }
    },
    addMessage: {
      type: MessageType,
      args: { 
        message: { type: new GraphQLNonNull(GraphQLString) },
        user: { type: new GraphQLNonNull(GraphQLString) },
        gameId: { type: new GraphQLNonNull(GraphQLString) },
        createdAt: {type: GraphQLString }
      },
      resolve(parentValue, args) {
          return axios.post(`${apiUrl}/messages`, args)
            .then(res => res.data)
      }
    },
    newMove: {
      type: GameType,
      args: { 
        id: { type: GraphQLNonNull(GraphQLString) },
        history: { type: new GraphQLList(HistoryInput) }
      },
      resolve(parentValue, args) {
        return axios.get(`${apiUrl}/games/${args.id}`)
          .then((game) => {
            let history = game.data.history;
            history.push(args.history[0])
            args.history = history;
            return axios.put(`${apiUrl}/games/${args.id}`, args)
              .then(res => res.data)
        })
      }
    }
  }
})

module.exports = mutation;