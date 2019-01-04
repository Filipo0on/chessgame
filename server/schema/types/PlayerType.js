const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

const PlayerType = new GraphQLObjectType({
    name: 'Player',
    fields: () => ({
      id: { type: GraphQLInt },
      userName: { type: GraphQLString },
    })
});

module.exports = PlayerType;