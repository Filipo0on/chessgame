const { GraphQLObjectType, GraphQLString } = require('graphql');

const HistoryType = new GraphQLObjectType({
    name: 'History',
    fields: () => ({
      color: { type: GraphQLString },
      from: { type: GraphQLString },
      to: { type: GraphQLString },
      flags: { type: GraphQLString },
      piece:  { type: GraphQLString },
      san: { type: GraphQLString }
    })
});

module.exports = HistoryType;