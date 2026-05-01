const { Schema } = require ("mongoose");

// Define structure of Holdings documenent
const HoldingsSchema = new Schema ({
   name: String,
   qty: Number,
   avg: Number,
   price: Number,
   net: String,
   day: String,
});

module.exports = { HoldingsSchema };