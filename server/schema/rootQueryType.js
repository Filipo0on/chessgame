const axios = require('axios');
const { GraphQLObjectType, GraphQLInt, GraphQLList } = require('graphql');
const GameType = require('./types/GameType');
const PlayerType = require('./types/PlayerType');
const CreatorType = require('./types/CreatorType');
const OpponentType = require('./types/OpponentType');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getCreator: {
      type: CreatorType,
      args: { id: { type: GraphQLInt } },
      resolve(parentValue, args) {
        console.log('getcreator',parentValue, args)
        return axios.get(`http://localhost:1337/creators/${args.id}`)
          .then(resp => {
            return resp.data});
      }
    },
    getCreators: {
      type: new GraphQLList(CreatorType),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:1337/creators`)
          .then(resp => resp.data);
      }
    },
    getOpponent: {
      type: OpponentType,
      args: { id: { type: GraphQLInt } },
      resolve(parentValue, args) {
        return axios.get(`http://localhost:1337/opponents/${args.id}`)
          .then(resp => resp.data);
      }
    },
    getOpponents: {
      type: new GraphQLList(OpponentType),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:1337/opponents`)
          .then(resp => resp.data);
      }
    },
    getGame: {
      type: GameType,
          args: { id: { type: GraphQLInt } },
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
        args: { id: { type: GraphQLInt } },
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

module.exports = RootQuery;