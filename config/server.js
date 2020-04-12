const {ApolloServer} = require('apollo-server');

const typeDefs = require('../src/graphql/schemas/typeDefs');
const resolvers = require('../src/graphql/resolvers/resolvers');
const myBoard1SubscriptionTab = require('../src/graphql/playground/tabs/myBoard1SubscriptionTab');
const myBoard1AddMessageTab = require('../src/graphql/playground/tabs/myBoard1AddMessageTab');

const PORT = 8080;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
  subscriptions: {
   path: '/subscriptions'
  },
  playground: {
    tabs: [
      myBoard1SubscriptionTab,
      myBoard1AddMessageTab,
    ]
  }
});

server.listen(PORT).then(({url, subscriptionsUrl}) => {
  console.log(`Server ready at ${url}`);
  console.log(`Subscriptions ready at ${subscriptionsUrl}`);
});

module.exports = server;
