const axios = require('axios');
const dbConfig = require('./../config')
const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');
const GameType = require('./types/GameType');
const MessageType = require('./types/MessageType')

const apiUrl = dbConfig.dbPath;
const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getMessage: {
      type: MessageType,
      resolve(parentValue, args) {
        return axios.get(`${apiUrl}/messages/${args.id}`)
          .then(resp => resp.data);
      }
    },
    getMessages: {
      type: new GraphQLList(MessageType),
      resolve(parentValue) {
        return axios.get(`${apiUrl}/messages`)
          .then(resp => resp.data);
      }
    },
    getGame: {
     type: GameType,
     args: { 
       id: { type: GraphQLString } },
        resolve(parentValue, args) {
          return axios.get(`${apiUrl}/games/${args.id}`)
            .then(resp => resp.data);
        }
      },
      getGames: {
        type: new GraphQLList(GameType),
        resolve(parentValue) {
          return axios.get(`${apiUrl}/games`)
            .then(resp => resp.data);
        }
      },
    }
});

module.exports = query;