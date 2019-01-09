const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean } = require('graphql');
const {PlayerType} = require('./PlayerType')

const GameType = new GraphQLObjectType({
    name: 'Game',
    fields: () => ({
      id: { type: GraphQLInt },
      gameType: { type: GraphQLString },
      gameTime: { type: GraphQLString },
      gameAddTime: { type: GraphQLString },
      gameStarted:  { type: GraphQLBoolean },
      creator: {
        type: PlayerType, 
        resolve(parentValue, args) {
          return axios.get(`http://localhost:1337/players/${parentValue.id}`)
          .then(res => res.data)
        }
       },
       opponent: {
        type: PlayerType, 
        resolve(parentValue, args) {
          return axios.get(`http://localhost:1337/players/${parentValue.id}`)
          .then(res => res.data)
        }
       }
    })
});

module.exports = GameType;