const {PubSub} = require('apollo-server');

const pubsub = new PubSub();

const MESSAGE_ADDED = 'MESSAGE_ADDED';

let messageLastId = 0;
const messages = [];

module.exports = {
  Subscription: {
    messageAdded: {
      subscribe: () => pubsub.asyncIterator([MESSAGE_ADDED]),
    }
  },
  Mutation: {
    addMessage: (root, args) => {
      messageLastId++;
      const newMessage = {
        id: messageLastId,
        board: args.board,
        user: args.user,
        content: args.content,
      };
      messages.push(newMessage);
      pubsub.publish(MESSAGE_ADDED, {messageAdded: newMessage});
      return newMessage;
    },
  },
};
