const axios = require('axios');
const dbConfig = require('./../../config')
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLList } = require('graphql');
const MessageType = require('./MessageType')

const apiUrl = dbConfig.dbPath;

const GameType = new GraphQLObjectType({
    name: 'Game',
    fields: () => ({
      id: { type: GraphQLString },
      gameType: { type: GraphQLString },
      gameTime: { type: GraphQLString },
      gameAddTime: { type: GraphQLString },
      gameStarted:  { type: GraphQLBoolean },
      creator: {type: GraphQLString},
      opponent: {type: GraphQLString},
      messages: { 
        type: new  GraphQLList(MessageType),
        resolve(parentValue, args) {
          console.log('parentValue : ', parentValue)
          return axios.get(`${apiUrl}/games/${parentValue.messagesId}/messages`)
            .then(res => res.data)
        }}
    })
});

module.exports = GameType;