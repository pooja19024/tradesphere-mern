const User = require("../Models/UserModel");
const bcrypt = require("bcryptjs");

//  import token function
const { createSecretToken } = require("../util/SecretToken");

// Signup
module.exports.Signup = async (req, res) => {
  try {
    let { email, password, username } = req.body;

     // Normalize and clean user input
    email = email.trim().toLowerCase();
    password = password.trim();


    // Check if user already exists in database
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user in database
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });

     // Send success response (never send password back)
    return res.status(201).json({
      message: "Signup successful",
      success: true,
    });

  } catch (error) {
    console.log(error);

   // Handle server error
    res.status(500).json({ 
      message: "Server error" });
  }
};


// LOGIN 
module.exports.Login = async (req, res) => {
  try {
    let { email, password } = req.body;

    // Normalize input
    email = email.trim().toLowerCase();
    password = password.trim();

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      // Avoid telling whether email or password is wrong (security)
      return res.status(400).json({ 
        message: "Invalid email or password" 
      });
    }

     // Compare entered password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ 
        message: "Invalid email or password" 
      });
    }
    
    // Generate token AFTER password verification
    const token = createSecretToken(user._id);


    // Send response with token and user data
    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        username: user.username,
        email: user.email,
  },
    });

  } catch (error) {
    console.log("Login Error:", error);

    res.status(500).json({ 
      message: "Server error",
    });
  }
};