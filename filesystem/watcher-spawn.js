const fs = require("fs");
const spawn = require("child_process").spawn;
const filename = process.argv[2];

if (!filename) {
  throw Error("Um arquivo deve ser inserido como entrada");
}

fs.watch(filename, () => {
  const ls = spawn("ls", ["-l", "-h", filename]);
  ls.stdout.pipe(process.stdout);
});

console.log(`Inciado processo de watche em arquivo ${filename} ...`);
