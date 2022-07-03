import React from "react";
import { Link } from "react-router-dom";
import "../../style/reboot.min.css";
const Profile = () => {
  return (
    <div>
      <div className="card-banner-profile">
        <div className="banner-profile"></div>
        <div className="profile-info">
          <div className="photo-profile"></div>
          <div className="profile-details">
            <h1 id="name" className="sttr-text">
              Administrator
            </h1>
            <p id="email" className="sttr-text">
              example.email@gmail.com
            </p>
          </div>
        </div>
        <div className="profile-menu">
          <Link to="/admin/profile" className="profile-link active">
            Account
          </Link>
          <Link to="/admin/settings" className="profile-link">
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
