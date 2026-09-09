import express from "express";
const app= express();
app.use(express.json());
let users=[{
    id:1,
    name:"A",
    email:"a@abes.ac.in"
},
{
    id:2,
    name:"B",
    email:"b@abes.ac.in"
}];
app.get("/users",(req,res)=>{
    res.json(users);
});
app.post("/users",(req,res)=>{
    const user={
        id:users.length+1,
        name:req.body.name,
        email:req.body.email
    };
    users.push(user);
    res.json(user);
   });
   app.put("/users/:id",(req,res)=>{
    let user=users.find(u=>u.id==req.params.id);
    user.name=req.body.name;
    res.json(user)
});
app.delete("/users/:id", (req, res) => {
    users = users.filter(u => u.id != req.params.id);

    res.json({
        message: "User deleted successfully"
    });
});
    app.listen(8000,()=>{
console.log("server is running on http://localhost:8000/users")
    });