const { ApolloServer, gql } = require('apollo-server');

const games = [
    {gameId: "G1", gameType: "Classic", gameTime: "5", gameAddTime: "15", gameStarted: false, creator: "P1", opponent: "P2"},
    {gameId: "G2", gameType: "Classic", gameTime: "5", gameAddTime: "15", gameStarted: false, creator: "P4", opponent: "P2"},
    {gameId: "G3", gameType: "Classic", gameTime: "5", gameAddTime: "15", gameStarted: false, creator: "P3", opponent: "P1"},
];

const players = [
    {userId: "P1", userName: "Anonymous"},
    {userId: "P2", userName: "Anonymous"},
    {userId: "P3", userName: "Anonymous"},
    {userId: "P4", userName: "Anonymous"},
]
const typeDefs = gql`
  type Game {
    gameId: String
    gameType: String
    gameTime: String
    gameAddTime: String
    gameStarted: Boolean
    creator: String
    opponent: String
  }

  type Player {
    userId: String
    userName: String
  }

  type Query {
    getGames: [Game]
    getPlayers: [Player]
  }
`;

const resolvers = {
  Query: {
    getGames: () => games,
    getPlayers: () => players,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});