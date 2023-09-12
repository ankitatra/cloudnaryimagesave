// const express=require("express")

// const app=express()
// const connection=require("./db")
// const router=require("./routes")

// app.use(express.json())

// const cors = require('cors');
// app.use(cors({
//     origin: 'http://localhost:3000', // Allow requests from this origin
//   }));
  
// app.get("/",(req,res)=>{
//     res.send("send data")
// })

// app.use("/admin", router);

// app.listen(4000, async () => {
//     try {
//       await connection;
//       console.log("db is running");
//     } catch (error) {
//       console.log(error);
//     }
//     console.log(`port is running 4000`);
//   });


const express = require('express');
const app = express();
const connection = require('./db');
const authRoutes = require('./routes/auth');
const notificationRoutes = require('./routes/notification');
const router = require('./routes');
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io'); // Import Socket.io

// ... (other imports and middleware)

// Middleware setup
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());


app.get('/', (req, res) => {
  res.send('send data');
});
app.use('/api/auth', authRoutes);
app.use('/api/notifications', notificationRoutes);




// const server = http.createServer(app); // Create an HTTP server
// const io = socketIo(server); // Create a Socket.io instance and attach it to the HTTP server



app.listen(7000, async () => {
  try {
    await connection;
    console.log('DB is running');
  } catch (error) {
    console.log(error);
  }
  console.log('Port is running on 7000');
});
