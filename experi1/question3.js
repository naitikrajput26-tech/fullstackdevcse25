const fs = require('fs');

console.log("Program Started");

// setTimeout
setTimeout(() => {
    console.log("setTimeout executed");
}, 0);

// setImmediate
setImmediate(() => {
    console.log("setImmediate executed");
});

// process.nextTick
process.nextTick(() => {
    console.log("process.nextTick executed");
});

// File operation
fs.readFile(__filename, () => {
    console.log("File Reading Completed");
});

console.log("Program Ended");