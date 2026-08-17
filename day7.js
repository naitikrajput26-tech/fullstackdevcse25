// //  pro. 2 CRUD


import fs from "fs/promises";

const fileName = "student.txt";

// Create File
async function createFile() {
  try {
    await fs.writeFile(
      fileName,
      "Name: naitik rajput\nEmail: abc@gmail.com\nCourse: BTech\nBranch: CSE"
    );

    console.log("File created successfully");
  } catch (error) {
    console.log("Error:", error);
  }
}

// Read File
async function readFile() {
  try {
    const data = await fs.readFile(fileName, "utf-8");

    console.log("File Content:");
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

createFile().then(() => {
  readFile();
});