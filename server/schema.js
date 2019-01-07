const RootQuery =  require('./schema/rootQueryType');
const graphql = require('graphql');
const { GraphQLSchema, } = graphql;

module.exports = new GraphQLSchema({
  query: RootQuery
});