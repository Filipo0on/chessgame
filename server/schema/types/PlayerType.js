const { GraphQLObjectType, GraphQLString } = require('graphql');

const PlayerType = new GraphQLObjectType({
    name: 'Player',
    fields: () => ({
      id: { type: GraphQLString },
      userName: { type: GraphQLString },
    })
});

module.exports = PlayerType;