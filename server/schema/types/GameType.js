const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLInt } = require('graphql');

const GameType = new GraphQLObjectType({
    name: 'Game',
    fields: () => ({
      id: { type: GraphQLString },
      gameType: { type: GraphQLString },
      gameTime: { type: GraphQLInt },
      gameAddTime: { type: GraphQLInt },
      gameStarted:  { type: GraphQLBoolean },
      creator: { type: GraphQLString },
      isWhite: { type: GraphQLString }
    })
});

module.exports = GameType;