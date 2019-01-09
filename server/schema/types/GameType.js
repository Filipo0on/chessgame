const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean } = require('graphql');
const axios = require('axios');
const CreatorType = require('./CreatorType');
const OpponentType = require('./OpponentType');


const GameType = new GraphQLObjectType({
    name: 'Game',
    fields: () => ({
      id: { type: GraphQLInt },
      gameType: { type: GraphQLString },
      gameTime: { type: GraphQLString },
      gameAddTime: { type: GraphQLString },
      gameStarted:  { type: GraphQLBoolean },
      creator: {
        type: CreatorType, 
        resolve(parentValue, args) {
          return axios.get(`http://localhost:1337/creators/${parentValue.creatorId}`)
          .then(res => res.data)
        }
       },
       opponent: {
        type: OpponentType, 
        resolve(parentValue, args) {
          return axios.get(`http://localhost:1337/opponents/${parentValue.opponentId}`)
          .then(res => res.data)
        }
       }
    })
});

module.exports = GameType;