module.exports = {
  endpoint: 'http://localhost:8080/',
  name: 'Add Message',
  query:
`mutation ($board: String!, $user: String!, $content: String!) {
  addMessage(board: $board, user: $user, content: $content) {
    id
    board
    user
    content
  }
}`,
  variables:
`{
  "board": "My Board 1",
  "user": "Wagner Paz",
  "content": "Hello"
}`,
};
