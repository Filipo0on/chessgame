const { GraphQLObjectType, GraphQLString, GraphQLBoolean } = require('graphql');

const GameType = new GraphQLObjectType({
    name: 'Game',
    fields: () => ({
      id: { type: GraphQLString },
      gameType: { type: GraphQLString },
      gameTime: { type: GraphQLString },
      gameAddTime: { type: GraphQLString },
      gameStarted:  { type: GraphQLBoolean },
      creator: {type: GraphQLString},
      opponent: {type: GraphQLString},
    })
});

module.exports = GameType;