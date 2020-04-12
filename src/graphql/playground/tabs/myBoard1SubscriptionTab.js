module.exports = {
  endpoint: 'http://localhost:8080/',
  name: 'My Board 1 Subscription',
  query:
`subscription onMessageAdded($board: String!) {
  messageAdded(board: $board) {
    id
    user
    content
  }
}`,
  variables: `{
    "board": "My Board 1"
  }`,
};
