// //rigger./fire event and on("emit param",callback) is a listener that will for register
// //emit() and on()
// require("events")
// const EventEmitter=require("Events");
// const event=new EventEmitter();
// event.emit("")
// event.om("greet",()=>{
//     console.log("this is event emitter");

// })
// event.emit("greet");
// event.once("greet");
// event.emit("greet");
// event.emit("greet");
// event.emit("greet");
// event.emit("greet");

// Trigger/Fire event using emit()
// on("eventName", callback) is a listener used to register an event.
// emit("eventName") triggers the registered event.

const EventEmitter = require("events");
const event = new EventEmitter();
event.on("greet", () => {
    console.log("This is event emitter using on()");
});
event.once("greet", () => {
    console.log("This is event emitter using once()");
});
event.emit("greet");
event.emit("greet");
event.emit("greet");
event.emit("greet");
event.emit("greet");