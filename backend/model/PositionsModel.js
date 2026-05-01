const { model } = require ("mongoose");

// Import Positions schema
const { PositionsSchema } = require('../schemas/PositionsSchema');

// Create model for positions collection
const PositionsModel = new model("positions", PositionsSchema);

module.exports = { PositionsModel };