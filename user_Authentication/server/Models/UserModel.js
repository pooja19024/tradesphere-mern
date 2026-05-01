const mongoose = require("mongoose");

// Define schema for User collection
const userSchema = new mongoose.Schema({

  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
    lowercase: true, // ensures stored email is always lowercase
  },

  username: {
    type: String,
    required: [true, "Your username is required"],
  },

  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  
  createdAt: {
    type: Date,
    default:  Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
