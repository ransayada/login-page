const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./Routes/authRoutes");
const cookieParser = require("cookie-parser");

const app = express();

app.listen(4000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server Started Successfully.");
  }
});

mongoose.connect('mongodb+srv://admin1234:admin1234@main.sv0id.mongodb.net/?retryWrites=true&w=majority',{ // connection to mongo db
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('connected to mongodb successfully');
}).catch(error=>{
    console.log('connection error: ' + error.message);
});
app.use(cors({ //cors is used to allow cross origin resource sharing , other URLs can access this server
    origin: ['http://localhost:3000'],
    methods: ['GET','POST'],
    credentials: true
}));

app.use(cookieParser());
app.use(express.json()); // get access to the body of the request as JSON DATA
app.use("/",authRoutes); // use the auth Routes