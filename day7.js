// //Pogram  2 CRUD
// import fs from "fs/promises"
// const fileName="student.txt";
// async function createFile(){
//   try { 
//  await fs.writeFile(
//  fileName,
//  "Name:naitik rajput\nEmail:abc@gmail.com,Btech,cse"

//  )
//   }
//   catch{
   
//   }

// }
import fs from "fs/promises";

const fileName = "student.txt";

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

createFile().then(() => {
  console.log("Function completed");
});