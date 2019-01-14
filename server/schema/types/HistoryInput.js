const { GraphQLInputObjectType, GraphQLString } = require('graphql');

const HistoryInput = new GraphQLInputObjectType({
  name: 'CreateUserInput',
    fields: () => ({
      color: { type: GraphQLString },
      fen: {type: GraphQLString },
      from: { type: GraphQLString },
      to: { type: GraphQLString },
      flags: { type: GraphQLString },
      piece:  { type: GraphQLString },
      san: { type: GraphQLString }
    }),
  });

module.exports = HistoryInput;