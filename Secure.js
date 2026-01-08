const https = require("https");
const fs = require("fs");
const options = {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
};

const server = https.createServer(options, (req, res) => {
    if (req.url === "/"){
        res.end("welcome to home page (HTTPS)");
    }
    else if (req.url === "/about"){
        res.end("about page (HTTPS)");
    }
    else if (req.url === "/contact"){
        res.end("contact page (HTTPS)");
    }
    else  {
        res.writeHead(404);
        res.end("page not found (HTTPS)");
    }
    });

    server.listen(3001, ()=>{
        console.log("https server running at https://localhost:3001");
    });

