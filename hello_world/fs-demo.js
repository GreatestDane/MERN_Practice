//file service import
const fs = require("fs");
const path = require("path");

// //Create a directory
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log('Folder being created...');
// });

//Write to a file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World",
  (err) => {
    if (err) throw err;
    console.log("File being written to...");
  }
);

//Append File
fs.appendFile(
  path.join(__dirname, "/test", "hello.txt"),
  " I am a brand new file of text",
  (err) => {
    if (err) throw err;
    console.log("File being written to...");
  }
);
