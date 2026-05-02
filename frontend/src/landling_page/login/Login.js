import React, { useState } from "react";
import axios from "axios";
import "./Login.css";


// Login Component (Authentication)
const Login = () => {

  // 📥 Form State (email & password)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //  Message State (success/error)
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // ✏️ Handle Input Change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //  Handle Form Submit (Login API Call)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //  API Call to backend
      const res = await axios.post(
        "http://localhost:4000/api/auth/login",
        formData,
        { withCredentials: true }
      );

      console.log(res.data);

      //  Store user data in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.user.username);
      localStorage.setItem("email", res.data.user.email);

      console.log("EMAIL SAVED:", res.data.user.email);

      //  Success Message
      setMessage("Login Successful");
      setIsError(false);

      //  Redirect to dashboard
      setTimeout(() => {
        window.location.href = `http://localhost:3001?username=${res.data.user.username}&email=${res.data.user.email}`;
      }, 1500);

    } catch (err) {

      //  Error Handling
      setMessage(
        err.response?.data?.message || "Invalid email or password"
      );
      setIsError(true);
    }
  };

  return (
    <div className="login-container">

      {/*  Login Box */}
      <div className="login-box">

        {/*  Heading */}
        <h2>Welcome Back</h2>
        <p className="sub-text">Login to continue trading</p>

        {/*  Login Form */}
        <form onSubmit={handleSubmit}>

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

          {/*  Submit Button */}
          <button type="submit">Login</button>

          {/*  Message Display */}
          {message && (
            <p className={isError ? "error-msg" : "success-msg"}>
              {message}
            </p>
          )}

        </form>

        {/*  Redirect to Signup */}
        <p className="signup-text">
          Don’t have an account?{" "}
          <span onClick={() => (window.location.href = "/signup")}>
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;