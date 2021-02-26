const path = require("path");

//returns the basename of the file path
console.log("basename: ", path.basename(__filename));

//returns the directory path of the file
console.log("dirname ", path.dirname(__filename));

//returns the extention name of the file
console.log("extname ", path.extname(__filename));

//Turns the entire file path into an object
console.log("parse: ", path.parse(__filename));

filePath = path.parse(__filename);

console.log("root:", filePath.root);
console.log("dir:", filePath.dir);
console.log("base:", filePath.base);
console.log("ext:", filePath.ext);
console.log("name:", filePath.name);
