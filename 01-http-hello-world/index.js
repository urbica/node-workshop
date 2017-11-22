// https://nodejs.org/api/http.html
const http = require('http');

const requestListener = (req, res) => {
  // write a response to the client
  res.write('Hello World!\n');

  // end the response
  res.end();
};

// create the http.Server object
// https://nodejs.org/api/http.html#http_class_http_server
const server = http.createServer(requestListener);

// start server listening for connections on port 3000.
server.listen(3000, '0.0.0.0', () => {
  const { address, port } = server.address();
  console.log(`Server started at ${address}:${port}`);
});
