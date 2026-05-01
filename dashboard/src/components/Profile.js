import React from "react";


  const Profile = () => {
  const params = new URLSearchParams(window.location.search);

  const username = params.get("username") || localStorage.getItem("username");

  const formattedName = username
  ? username.charAt(0).toUpperCase() + username.slice(1)
  : "User";
  

  return (
    <div className="profile-page">
      <div className="profile-card">
        {/* Avatar */}
        <div className="profile-avatar">
          {username ? username.charAt(0).toUpperCase() : "U"}
        </div>
        {/* Name */}
        <h2>{formattedName}</h2>

      
        {/* Info Section */}
        <div className="profile-info">
          <div>
            <p className="label">Account Type</p>
            <p>Investor</p>
          </div>

          <div>
            <p className="label">Member Since</p>
            <p>2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
