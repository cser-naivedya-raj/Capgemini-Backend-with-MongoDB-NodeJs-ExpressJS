// Import the EventEmitter class from the events module
// Events module se EventEmitter class import kar rahe hain
const EventEmitter = require('events')

// Create an instance of EventEmitter
// EventEmitter ka instance create kar rahe hain
const emitter = new EventEmitter()

// Register an event listener for the 'login' event
// 'login' event ke liye event listener register kar rahe hain
emitter.on('login', () => {
    console.log("login successful");
})

// Register an event listener for the 'logout' event
// 'logout' event ke liye event listener register kar rahe hain
emitter.on('logout', () => {
    console.log("logout successful");
})

// Emit the 'login' event, triggering the associated listener
// 'login' event emit kar rahe hain, jo associated listener ko trigger karega
emitter.emit('login')

// Emit the 'logout' event, triggering the associated listener
// 'logout' event emit kar rahe hain, jo associated listener ko trigger karega
emitter.emit('logout')