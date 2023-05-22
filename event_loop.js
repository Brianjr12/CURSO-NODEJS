const http = require("http");
const sever = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("welcome to the server");
    return res.end();
  }
  if (req.url === "/about") {
    // block code
    // for (let i = 0; i < 10000; i++) {
    //   console.log(Math.random() * i);
    // }
    return res.end("about page");
  }
  res.end("Not found")
});
sever.listen(3000)
console.log("sever on port 3000");