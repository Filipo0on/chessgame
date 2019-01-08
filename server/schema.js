const query =  require('./schema/rootQueryType');
const mutation =  require('./schema/mutation');
const graphql = require('graphql');
const { GraphQLSchema, } = graphql;

module.exports = new GraphQLSchema({
  query,
  mutation
});