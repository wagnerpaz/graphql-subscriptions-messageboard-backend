const {gql} = require('apollo-server-express');
const root = require('./rootGraphqlSchema');

const schema = gql`
  type Message {
    id: Int!
    board: String!
    user: String!
    content: String!
  }

  extend type Mutation {
    addMessage(
      board: String!
      user: String!
      content: String!
    ): Message!
  }

  extend type Subscription {
    messageAdded(
      board: String!
    ): Message!
  }
`;

module.exports = [root, schema];
