const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean } = require('graphql');

const GameType = new GraphQLObjectType({
    name: 'Game',
    fields: () => ({
      id: { type: GraphQLInt },
      gameType: { type: GraphQLString },
      gameTime: { type: GraphQLString },
      gameAddTime: { type: GraphQLString },
      gameStarted:  { type: GraphQLBoolean },
    })
});

module.exports = GameType;