const EventEmitter = require('events');

// Create custom EventEmitter
const event = new EventEmitter();

// Register greet event
event.on('greet', () => {
    console.log("Hello! Welcome to Node.js");
});

// Register exit event
event.on('exit', () => {
    console.log("Exit event triggered. Goodbye!");
});

// Trigger events
event.emit('greet');
event.emit('exit');