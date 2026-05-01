import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";


// Extract username from URL query parameters
const params = new URLSearchParams(window.location.search);
const username = params.get("username");

const formattedName = username
  ? username.charAt(0).toUpperCase() + username.slice(1)
  : "User";

const Menu = () => {
  const navigate = useNavigate();    // Used for programmatic navigation
  const location = useLocation();     // Used for programmatic navigation

  // State to track which menu is active
  const [selectedMenu, setSelectedMenu] = useState(0);

  // State to toggle profile dropdown visibility
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Handle menu click and update active menu
  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };


  // Toggle profile dropdown open/close
  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // CSS classes for menu styling
  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">

        {/* Logo Section */}
      <img src="kite_logo.png" style={{ width: "50px" }} alt="logo" />

      <div className="menus">
        <ul>

          {/* Dashboard Navigation */}
          <li>
            <Link to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>


           {/* Orders Navigation */}
          <li>
            <Link to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>


          {/* Holdings Navigation */}
          <li>
            <Link to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
           
           {/* Position Navigation */}
          <li>
            <Link to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>


         {/* Funds Navigation */}
          <li>
            <Link to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>

        </ul>

        <hr />

        {/* Profile Section*/}
        <div
          className="profile"
          onClick={handleProfileClick}
          style={{ position: "relative", cursor: "pointer" }}
        >

          {/* User Avatar (first letter of username) */}
          <div className="avatar">
            {username ? username.charAt(0).toUpperCase() : "U"}
          </div>
          
          {/* Username display */}
          <p className="username">{formattedName}</p>

          {/*  DROPDOWN */}

          {isProfileDropdownOpen && (
            <div className="profile-dropdown">

               {/* Navigate to Profile Page */}
              <p
                onClick={() => {
                   // Get email from localStorage
                   const email = localStorage.getItem("email"); 


                   // Navigate to profile page with query params 
                  navigate(`/profile?username=${username}&email=${email}`);
                }}
              >
                Profile
              </p>

            {/* Logout functionality */}
              <p
                onClick={() => {
                  // Remove token from localStorage (logout user)
                  localStorage.removeItem("token");
                  
                  // Redirect to login page
                  window.location.href = "http://localhost:3000/login";
                }}
              >
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
