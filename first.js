const fs=require("fs");
fs.writeFileSync("data.txt","Hello Students!");
console.log("Sync write done");