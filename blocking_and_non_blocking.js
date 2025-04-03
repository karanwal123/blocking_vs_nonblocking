import fs from "fs";
//built-in File System module in Node.js.

// Synchronous (Blocking) Read
//The code waits for the operation to complete before executing the next line. Slows down execution.
console.log("Before synchronous read");

//The content of the file is stored in
const file_content = fs.readFileSync("sample.txt", "utf8");
console.log("Synchronous file read complete.");
console.log("Data from synchronous read:", file_content);

// Asynchronous (Non-Blocking) Read
// The operation starts, and the program continues executing other code. When the operation finishes, a callback function is triggered
// .
console.log("Before asynchronous read");
//synatx : fs.readFile(path, encoding, callback);

//asynchronous (non-blocking) function
//fs.readFile(path, encoding, callback)
fs.readFile("sample.txt", "utf8", (err, file_content) => {
  console.log("Asynchronous file read complete.");
  console.log("Data from asynchronous read:", file_content);
});
console.log("After asynchronous read call");
