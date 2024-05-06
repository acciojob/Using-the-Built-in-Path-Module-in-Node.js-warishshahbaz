const path = require("path");
const fs = require("fs");

// TODO: Use path.join to join two file path segments
const outputPath = path.join(__dirname, "output.txt");

const message = "Hello, World!";

// Write the message to the file
fs.writeFile(outputPath, message, (err) => {
  if (err) {
    console.error(`Error writing to file: ${err}`);
    throw err;
  }
  console.log(`Message "${message}" has been written to ${outputPath}`);
});
// TODO: Print the resulting path to the console
