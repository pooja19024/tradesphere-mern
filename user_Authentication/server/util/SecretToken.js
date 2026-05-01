require("dotenv").config();
const jwt = require("jsonwebtoken");

// Function to generate JWT token using secret key from .env
module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: "3d",
  });
};