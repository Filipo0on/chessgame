const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

const OpponentType = new GraphQLObjectType({
    name: 'Opponent',
    fields: () => ({
      id: { type: GraphQLInt },
      color: { type: GraphQLString }
    })
});

module.exports = OpponentType;