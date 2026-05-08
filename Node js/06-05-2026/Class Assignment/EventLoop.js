// Initial synchronous code execution (Call Stack)
// Pehle synchronous code execute hota hai (Call Stack mein)
console.log("hii");

// Import the File System module
// File System module import kar rahe hain
const fs = require('fs')

// Create a readable stream (Note: __dirname is a directory path, typically you'd specify a file)
// Readable stream create kar rahe hain (Note: __dirname directory path hai, usually file specify karte hain)
// This demonstrates I/O operations that go to the I/O queue
// Ye I/O operations ko demonstrate karta hai jo I/O queue mein jate hain
const readableStream = fs.createReadStream(__dirname)
console.log(__dirname);
console.log(__filename);

// Close the stream immediately
// Stream ko immediately close kar do
readableStream.close()

// Event listener for 'close' event - goes to I/O Queue
// 'close' event ke liye event listener - I/O Queue mein jata hai
readableStream.on("close",
    () => {
        console.log("This is from readableStream close event callbacks");
    }
)

// Promise resolution - goes to Microtask Queue (higher priority than regular tasks)
// Promise resolution - Microtask Queue mein jata hai (regular tasks se higher priority)
Promise.resolve().then(
    () => {
        console.log("This is promise ");
    }
)

// Timer callback - goes to Timer Queue
// Timer callback - Timer Queue mein jata hai
setTimeout(() => {
    console.log("set timeout queue 1");
}, 0);

// Immediate callback - goes to Check Queue
// Immediate callback - Check Queue mein jata hai
setImmediate(
    () => {
        console.log("This is setImmediate");
    }
)

// Next tick callback - goes to Next Tick Queue (highest priority microtask)
// Next tick callback - Next Tick Queue mein jata hai (highest priority microtask)
process.nextTick(
    () => {
        console.log("This is nextTick ");
    }
)
