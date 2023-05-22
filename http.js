const http = require("http");

const server = http.createServer((request, response) => {
  // console.log(request.url);

  if (request.url === "/") {
    response.write("welcome to the server");
    return response.end();
  }

  if (request.url === "/about") {
    response.write("welcome to about");
    return response.end();
  }

  response.write(`
    <h1>Not Found</h1>
    <p>This page was not found</p>
    <a href='/'>return to main page</a>
    `);
  response.end();
});

server.listen(3000);

console.log("server listening in port 3000");
