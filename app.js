// Dot env
require("dotenv").config();

// Express
const express = require("express");
const app = express();
// Middleware Json
app.use(express.json());
// Port
const port = process.env.PORT || 3000;
// DB Connection
const mongoose = require("mongoose");
async function dbConnection() {
    try {
       await mongoose.connect(process.env.DB_URL);
  console.log('Connected!')
    } catch (error) {
        console.log(error);
    } 
}
const AuthRoutes = require("./routes/AuthRoutes");
app.use("/api", AuthRoutes);
dbConnection();
// Listen / Run Server
app.listen(port, () => {
    console.log(`Server Is Running ${port}`);
})
