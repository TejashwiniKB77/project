const os= require("os");
console.log(os.platform());
console.log(os.cpus());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.homedir());

// const path=require("path");
// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));
// console.log(path.extname(__filename));


// const http=require("http");
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":"text-plain"});
//     res.end("hello from node http server!");
// });

// server.listen(3000,()=>{
//     console.log("Server running at localhost 3000");
//  });
//   this is same code as below
// const http=require("http");
// const server1=http.createServer((req,res)=>{
// if(req.url==="/"){
//     res.end("welcome to  home page");
// }
// else if(req.url==="/about"){
//     res.end("about page");
// }
// else if(req.url==="/contact"){
//     res.end("contact pge");
// }
// else{
//     res.writeHead(404);
//     res.end("page not found");
// }
// });

// server1.listen(3000), ()=> {
// console.log("server is running");
// };