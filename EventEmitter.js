const Eventemitter=require("events");
const emitter=new Eventemitter();

emitter.on("greet",()=>{
    console.log("Hello Students");
});

emitter.emit("greet");