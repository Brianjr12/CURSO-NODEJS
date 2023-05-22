// * creando promesas a la antiguad
/* const getText = (pathFile) => {
  return new Promise((resolve, reject) => {
    readFile(pathFile, "utf-8", (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
};

getText("./data/third.txt")
.then(result => console.log(result))
.then(() => getText("./data/first.txt"))
.then(result => console.log(result))
.catch(err => console.log(err));
*/

//* usando async await
// const {promisify} = require('util');
// const readFilePromise = promisify(readFile)
const { readFile } = require("fs/promises");

const read = async () => {
  try {
    const result = await readFile("./data/first.txt", "utf-8");
    const result2 = await readFile("./data/second.txt", "utf-8");
    const result3 = await readFile("./data/third.txt", "utf-8");
    console.log(result);
    console.log(result2);
    console.log(result3);
  } catch (error) {
    console.log(error);
  }
};
read();
