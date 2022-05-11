const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema.js");
const resolvers = require("./resolvers");
const TrackAPI = require("./datasources/track-api");

const server = new ApolloServer({
  typeDefs,
  csrfPrevention: true,
  resolvers,
  dataSources: () => ({ trackAPI: new TrackAPI() }),
});

server
  .listen({
    port: process.env.PORT || 4000,
  })
  .then(() => {
    console.log(`
    🚀  Server is running!
  `);
  });
