import parser from "./parser/parser";

// log and end if no file is given
if (Bun.argv[2] == undefined) {
    console.log("No file given");
    process.exit(1);
}

// get the full path of the file, if errors out, exit
try {
    var fullPath = Bun.resolveSync(Bun.argv[2], process.cwd());
} catch (_) {
    console.log("File not found");
    process.exit(1);
}

// read the file
let code = await Bun.file(fullPath).text();
console.log(parser.parse(code));