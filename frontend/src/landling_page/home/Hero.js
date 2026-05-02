import React from "react";
import { useNavigate } from "react-router-dom";

//Hero Section (Main Landing Banner)
function Hero() {
  const navigate = useNavigate(); 
  return (
    <div className="container p-5 mb-5">

      {/* Hero Image */}
      <div className="row text-center">
        <img src="media/homeHero.png" alt="Hero Image" className="mb-5" />

        {/* Main Heading */}
        <h1 className="mt-5">Invest in everything</h1>

        {/* Sub Heading */}
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>

        {/* Call To Action Button */}
        <button
          className="p-2 btn btn-orange fs-5 mb-5"
          style={{ width: "20%", margin: " 0 auto" }}
          onClick={() => navigate("/signup")}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
