const axios = require('axios');
const { GraphQLObjectType, GraphQLInt, GraphQLList } = require('graphql');
const GameType = require('./types/GameType');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      getGame: {
        type: GameType,
        args: { id: { type: GraphQLInt } },
        resolve(parentValue, args) {
          return axios.get(`http://localhost:3000/games/${args.id}`)
            .then(resp => resp.data);
        }
      },
      getGames: {
          type: new GraphQLList(GameType),
          resolve(parentValue) {
            return axios.get(`http://localhost:3000/games`)
              .then(resp => resp.data);
          }
        },
    }
});

module.exports = RootQuery;