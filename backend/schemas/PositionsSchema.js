const { Schema } = require ("mongoose");

// Define structure for Positions
const PositionsSchema = new Schema ({
   product:String,
   name: String,
   qty: Number,
   avg: Number,
   price: Number,
   net: String,
   day: String,
   isLoss:Boolean,
});

module.exports = { PositionsSchema };