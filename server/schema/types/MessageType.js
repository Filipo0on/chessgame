const { GraphQLObjectType, GraphQLString } = require('graphql');

const MessageType = new GraphQLObjectType({
    name: 'Message',
    fields: () => ({
      id: { type: GraphQLString },
      gameId: { type: GraphQLString },
      message: { type: GraphQLString },
      user: { type: GraphQLString },
      createdAt: { type: GraphQLString }
    })
});

module.exports = MessageType;