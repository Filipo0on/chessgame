const { ApolloServer, gql } = require('apollo-server');

const games = [{
        gameId: "G1",
        gameType: "Classic",
        gameTime: "5",
        gameAddTime: "15",
        gameStarted: false,
        creator: ["P1","Anonymous"],
        opponent: [{
            userId: "P2",
            userName: "Anonymous"
        }]
    },
    {
        gameId: "G2",
        gameType: "Classic",
        gameTime: "5",
        gameAddTime: "15",
        gameStarted: false,
        creator: [{
            userId: "P4",
            userName: "Anonymous"
        }],
        opponent: [{
            userId: "P2",
            userName: "Anonymous"
        }]
    },
    {
        gameId: "G3",
        gameType: "Classic",
        gameTime: "5",
        gameAddTime: "15",
        gameStarted: false,
        creator: [{
            userId: "P3",
            userName: "Anonymous"
        }],
        opponent: [{
            userId: "P1",
            userName: "Anonymous"
        }]
    },
];

const players = [{
        userId: "P1",
        userName: "Anonymous"
    },
    {
        userId: "P2",
        userName: "Anonymous"
    },
    {
        userId: "P3",
        userName: "Anonymous"
    },
    {
        userId: "P4",
        userName: "Anonymous"
    },
]
const typeDefs = gql `
  type Game {
    gameId: String
    gameType: String
    gameTime: String
    gameAddTime: String
    gameStarted: Boolean
    creator: Player
    opponent: Player
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

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});