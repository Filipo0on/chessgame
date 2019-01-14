const axios = require('axios');
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLNonNull, GraphQLList } = require('graphql');
const GameType = require('./types/GameType');
const HistoryInput = require('./types/HistoryInput')

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
        return axios.patch(`http://localhost:1337/games/${args.id}`, args)
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
        return axios.get(`http://localhost:1337/games/${args.id}`)
          .then((game) => {
            let history = game.data.history;
            history.push(args.history[0])
            args.history = history;
            return axios.put(`http://localhost:1337/games/${args.id}`, args)
              .then(res => res.data)
        })
      }
    }
  }
})

module.exports = mutation;