require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


// Import models (used to interact with DB)
const {HoldingsModel} = require('./model/HoldingsModel');
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
 
const app = express();


//                               MIDDLEWARES 
             
// Enable CORS for frontend communication                 
app.use(cors());

// Parse incoming JSON data
app.use(bodyParser.json());

//                          ROUTES 

// Get all holdings data from database
app.get("/allHoldings", async(req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});


// Get all positions data
app.get("/allPositions", async(req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});


// Create a new order
app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });


  newOrder.save();          // Save order in DB

  res.send("Order saved!");
});
 

//                           SERVER START 
app.listen(PORT ,() => {
  console.log("App started on port " + PORT);
  mongoose.connect(uri);            // Connect to MongoDB when server starts

  console.log("DB connected");
});

