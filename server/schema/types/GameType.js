const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLList } = require('graphql');
const HistoryType = require('./HistoryType')

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
      isBlack: { type: GraphQLString },
      fen: { type: GraphQLString },
      history: { type: GraphQLList(HistoryType) }
    })
});

module.exports = GameType;