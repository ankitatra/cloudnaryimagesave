const express=require("express")

const app=express()
const connection=require("./db")
const router=require("./routes")

app.use(express.json())

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
  }));
  
app.get("/",(req,res)=>{
    res.send("send data")
})

app.use("/admin", router);

app.listen(4000, async () => {
    try {
      await connection;
      console.log("db is running");
    } catch (error) {
      console.log(error);
    }
    console.log(`port is running 4000`);
  });