// call mongoose
const mongoose = require("mongoose");
// create Schema
const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true
    }
}, {timestamps: true});
// Create Model
const User = mongoose.model("User", userSchema);
// export module
module.exports = User;