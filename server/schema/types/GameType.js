const axios = require('axios');
const dbConfig = require('./../../config')
const MessageType = require('./MessageType')
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLList } = require('graphql');
const HistoryType = require('./HistoryType')

const apiUrl = dbConfig.dbPath;

const GameType = new GraphQLObjectType({
  name: 'Game',
  fields: () => ({
    id: { type: GraphQLString },
    gameType: { type: GraphQLString },
    gameTime: { type: GraphQLString },
    gameAddTime: { type: GraphQLString },
    gameStarted:  { type: GraphQLBoolean },
    creator: { type: GraphQLString },
    opponent: { type: GraphQLString },
    isWhite: { type: GraphQLString },
    history: { type: GraphQLList(HistoryType) },
    messages: { 
      type: new  GraphQLList(MessageType),
      resolve(parentValue, args) {
        console.log('parentValue : ', parentValue)
        return axios.get(`${apiUrl}/games/${parentValue.messagesId}/messages`)
          .then(res => res.data)
      }
    }
  })
});

module.exports = GameType;