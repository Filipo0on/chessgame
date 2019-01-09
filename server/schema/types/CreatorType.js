const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

const CreatorType = new GraphQLObjectType({
    name: 'Creator',
    fields: () => ({
      id: { type: GraphQLInt },
      color: { type: GraphQLString }
    })
});

module.exports = CreatorType;