import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//  Signup Component (User Registration)
const Signup = () => {

  //  Navigation Hook
  const navigate = useNavigate();

  //  Form State (Controlled Inputs)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  //  UI State (Message, Error, Loading)
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  //  Handle Input Change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //  Handle Form Submit (Signup API Call)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      //  API Request
      const res = await axios.post(
        "http://localhost:4000/api/auth/signup",
        formData,
        { withCredentials: true }
      );

      console.log(res.data);

      //  Store user info in localStorage
      localStorage.setItem("username", formData.username);
      localStorage.setItem("email", formData.email);

      //  Success Message
      setMessage("Signup Successful");
      setIsError(false);

      //  Redirect to dashboard
      setTimeout(() => {
  const url = `http://localhost:3001?username=${formData.username}&email=${formData.email}`;
  
  console.log("Redirecting to:", url);

  window.location.replace(url);
}, 1500);

    } catch (err) {

      //  Error Handling
      setMessage(err.response?.data?.message || "Signup failed");
      setIsError(true);

    } finally {
      //  Stop Loading
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">

      {/*  Signup Box */}
      <div className="signup-box">

        {/*  Heading */}
        <h2>Create your account</h2>
        <p className="sub-text">Start investing the smart way</p>

        {/*  Signup Form */}
        <form onSubmit={handleSubmit}>

          {/*  Username Input */}
          <input
            type="text"
            name="username"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          {/*  Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          {/*  Password Input */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          {/*  Message Display */}
          {message && (
            <p className={isError ? "error-msg" : "success-msg"}>
              {message}
            </p>
          )}

          {/*  Submit Button */}
          <button type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>

        </form>

        {/*  Redirect to Login */}
        <p className="login-text">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            style={{ cursor: "pointer", color: "blue" }}
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
};

export default Signup;