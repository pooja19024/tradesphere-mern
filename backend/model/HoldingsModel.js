const { model } = require ("mongoose");

// Import schema for Holdings collection
const { HoldingsSchema } = require('../schemas/HoldingsSchema');

// Create model using schema
// "holding" = collection name in MongoDB
const HoldingsModel = new model("holding", HoldingsSchema);

module.exports = { HoldingsModel };