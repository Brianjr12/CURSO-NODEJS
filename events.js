const EventEmitter = require("events");
const customEmitter = new EventEmitter();

customEmitter.on('response', (data, ...more) => {
  console.log("received");
  console.log(data);
  console.log(more);
});

customEmitter.emit(
  'response',
  "hello world",
  12,
  { name: "brian" },
  [4, 43, 245]
);
