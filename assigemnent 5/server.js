import express from 'express'
import cors from 'cors'
const app = express();

app.use(cors());

app.use("/assigemnent", express.static("files"));
app.listen(5000,()=>{
    console.log("Server running on 5000")
});