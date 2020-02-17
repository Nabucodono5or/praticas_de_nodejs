const fs = require("fs");

fs.watch("filesystem/target.txt", () => console.log("File has changed!!"));
console.log("Now watching target.txt for changes...");
