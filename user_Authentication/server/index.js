const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const authRoute = require("./Routes/AuthRoute");

const app = express();


// Extract environment variables
const { MONGO_URL, PORT } = process.env;

//  DB Connection 
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.error(err));

                   //  Middlewares

// Enable CORS for frontend communication
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"], 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());    // Parse cookies
app.use(express.json());    // Parse JSON request body

//  Routes
app.use("/api/auth", authRoute);

// Server Start
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});