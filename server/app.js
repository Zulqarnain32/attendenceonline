const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./model/userSchema")

const port = 5000;

const app = express();
app.use(express.json());
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/Attendence")
  .then(() => {
    console.log("Connected successfully");
  })
  .catch((err) => {
    console.log("No connection: " + err);
  });

//  ============ Register the user ============
app.post("/register", (req,res) => {
  userModel.create(req.body)
  .then(employee => res.json(employee))
  .catch(err => res.json(err))
})  

// ============== Login the user ==============
app.post("/login", (req,res) => {
  const { email,password } = req.body;
  userModel.findOne({email:email})
  .then(user => {
    console.log(user);
    if(user){
      if(user.password === password){
         res.json("success")
      } else {
        res.json("incorrect password")
      }
    } else {
      res.json("invalid email")
    }
      
  })
})  

app.listen(port, () => {
  console.log("server is listening at port no " + port);
})
