const fs = require('fs');

// CREATE operation
fs.writeFileSync('student.txt', 'Name: Naitik\nCourse: BTech CSE');

console.log("File Created Successfully!");

// READ operation
const data = fs.readFileSync('student.txt', 'utf8');

console.log("\nFile Content:");
console.log(data);

// UPDATE operation
fs.appendFileSync('student.txt', '\nCollege: ABES Engineering College');

console.log("\nFile Updated Successfully!");

// READ updated file
const updatedData = fs.readFileSync('student.txt', 'utf8');

console.log("\nUpdated File Content:");
console.log(updatedData);

// DELETE operation
fs.unlinkSync('student.txt');

console.log("\nFile Deleted Successfully!");