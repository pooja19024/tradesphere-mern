const { model } = require ("mongoose");

// Import Orders schema
const { OrdersSchema } = require('../schemas/OrdersSchema');

// Create model for orders collection
const OrdersModel = new model("order", OrdersSchema);

module.exports = { OrdersModel };