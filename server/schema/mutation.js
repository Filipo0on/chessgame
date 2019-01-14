const axios = require('axios');
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLNonNull, GraphQLList } = require('graphql');
const GameType = require('./types/GameType');
const MessageType = require('./types/MessageType');
const dbConfig = require('./../config')
const HistoryInput = require('./types/HistoryInput')

const apiUrl =  dbConfig.dbPath;

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
        return axios.patch(`${apiUrl}/games/${args.id}`, args)
          .then(res => res.data)
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