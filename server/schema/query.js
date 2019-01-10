const axios = require('axios');
const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');
const GameType = require('./types/GameType');
const PlayerType = require('./types/PlayerType');

const query = new GraphQLObjectType({
    name: 'Query',
    fields: {
      getGame: {
          type: GameType,
          args: { id: { type: GraphQLString } },
          resolve(parentValue, args) {
            return axios.get(`http://localhost:1337/games/${args.id}`)
              .then(resp => resp.data);
          }
        },
      getGames: {
        type: new GraphQLList(GameType),
        resolve(parentValue) {
          return axios.get(`http://localhost:1337/games`)
            .then(resp => resp.data);
        }
      },
      getPlayer: {
        type: PlayerType,
        args: { id: { type: GraphQLString } },
        resolve(parentValue, args) {
          return axios.get(`http://localhost:1337/players/${args.id}`)
            .then(resp => resp.data);
        }
      },
      getPlayers: {
        type: new GraphQLList(PlayerType),
        resolve(parentValue) {
          return axios.get(`http://localhost:1337/players`)
            .then(resp => resp.data);
        }
      },
    }
});

module.exports = query;