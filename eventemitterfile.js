const fs=require("fs");
const Eventemitter=require("events");

const emitter=new Eventemitter();
emitter.on("fileCreated", (file)=>{
    console.log(`${file} is created successfully`);
});
fs.writeFile("demo.txt","sample text",()=>{
emitter.emit("fileCreated","demo.txt");
});