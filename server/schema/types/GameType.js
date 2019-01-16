const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLInt } = require('graphql');
const axios = require('axios');
const dbConfig = require('./../../config')
const MessageType = require('./MessageType')
const HistoryType = require('./HistoryType')

const apiUrl = dbConfig.dbPath;

const GameType = new GraphQLObjectType({

  name: 'Game',
  fields: () => ({
    id: { type: GraphQLString },
    gameType: { type: GraphQLString },
    gameTime: { type: GraphQLInt },
    gameAddTime: { type: GraphQLInt },
    gameStarted:  { type: GraphQLBoolean },
    creator: { type: GraphQLString },
    opponent: { type: GraphQLString },
    isWhite: { type: GraphQLString },
    isBlack: { type: GraphQLString },

    history: { type: GraphQLList(HistoryType) },
    messages: { 
      type: new  GraphQLList(MessageType),
      resolve(parentValue, args) {
        return axios.get(`${apiUrl}/games/${parentValue.id}/messages`)
          .then(res => res.data)
      }
    }
  })
});

module.exports = GameType;