// async function test(){
//     await console.log("2:message");
//     console.log("3:message");
//     console.log("4:message");
// }
// console.log("1:message");
// test()
// console.log("5:message");
async function data() {
    console.log("logionpass:..");
    const response= fetch("./studentdata.json");
    console.log((await response).status)
    const std= await response.json();
    return std;
    
    await console.log("name:naitik");
    console.log("id");

    
}
data().then((result)=>{
console.log(result);
}).catch(()=>{
    console.log(Error);
})
