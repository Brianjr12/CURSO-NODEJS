// * read the file and send via http
const http = require('http');
const { createReadStream } = require('fs');

const sever = http.createServer((req, res) => {
  const fileStream = createReadStream('./data/bigfile.txt', {
    encoding: 'utf8',
  })
  fileStream.on('data', chunk => { 
    // pipe send the data to another function
    fileStream.pipe(res)
  })

  fileStream.on('error', error => {
    console.log(error);
  })
})
sever.listen(3000)
console.log(`server on port ${3000}`);