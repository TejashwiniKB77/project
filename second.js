const fs=require("fs");
fs.writeFile("data1.txt","Async Hello!" , ()=>{
 console.log("async write done");
   });
   console.log("this prints first!");