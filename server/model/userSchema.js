const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:"String",
    email:"String",
    mobile:"String",
    qualification:"String",
    password:"String"
})

const userModel = new mongoose.model("User",userSchema)
module.exports = userModel
