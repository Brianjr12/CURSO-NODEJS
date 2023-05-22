// * creating the big file
const { writeFile } = require("fs/promises");
const colors = require("colors");

const createBigFile = async () => {
  await writeFile("./data/bigfile.txt", "hello world".repeat(100000));
};
// createBigFile();

// * how to read a large file in parts
const { createReadStream } = require("fs");
const stream = createReadStream("./data/bigfile.txt", {
  encoding: "utf-8",
});

stream.on("data", (chunk) => {
  console.log(chunk);
});

stream.on("end", () => {
  console.log("i already read the file".bgGreen);
});

stream.on("error", (error) => {
  console.log(error);
});
