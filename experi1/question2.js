const EventEmitter = require('events');

// Create event object
const button = new EventEmitter();

// Click event listener
button.on('click', () => {
    console.log("Button Clicked!");
});

// Mouseover event listener
button.on('mouseover', () => {
    console.log("Mouse is over the button!");
});

// Double click event listener
button.on('dblclick', () => {
    console.log("Button Double Clicked!");
});

// Trigger events
button.emit('click');
button.emit('mouseover');
button.emit('dblclick');