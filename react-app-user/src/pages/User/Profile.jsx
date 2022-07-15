import React from "react";

const Profile = () => {
  const backHistory = () => {
    window.history.back();
  };
  return (
    <div className="sc-dbhs">
      <header className="or-header">
        <button className="back-button me-auto" onClick={backHistory}>
          <i className="fa-solid fa-angle-left back-icon"></i>
        </button>
        <span className="text-uppercase fw-500 me-auto">Profile</span>
      </header>
      <div className="dbhs-content">
        <div className="card">
          <div className="box-grid:2 gap:2 card-profile">
            <div className="profile-image">
              <img src="" alt="_profile-image" />
            </div>
            <div className="profile-details">
              <div className="input-group mb-1">
                <label className="input-label text-dark text-uppercase fz:11 fw-600">
                  Your Sponsor
                </label>
                <div className="input-field-sm not-icon">
                  <input
                    type="password"
                    id="password"
                    placeholder="New Password"
                    className="input-control input-control-sm"
                    required
                  />
                </div>
              </div>
              <label className="input-label text-dark text-uppercase fz:11 fw-600">
                Your Profile
              </label>
              <div className="card card-overflow">
                <div className="py-1 px-2">
                  <div className="nav aic jcs sttr-text">
                    <p
                      className="m-0 fz:12 fw-500 text-dark"
                      style={{ width: "80px" }}
                    >
                      Country :
                    </p>
                    <p className="m-0 fz:12 fw-500 text-dark">Srilanka</p>
                  </div>
                  <div className="nav aic jcs sttr-text">
                    <p
                      className="m-0 fz:12 fw-500 text-dark"
                      style={{ width: "80px" }}
                    >
                      Name :
                    </p>
                    <p className="m-0 fz:12 fw-500 text-dark">Lorem, ipsum.</p>
                  </div>
                  <div className="nav aic jcs sttr-text">
                    <p
                      className="m-0 fz:12 fw-500 text-dark"
                      style={{ width: "80px" }}
                    >
                      Username :
                    </p>
                    <p className="m-0 fz:12 fw-500 text-dark">Lorem, ipsum.</p>
                  </div>
                  <div className="nav aic jcs sttr-text">
                    <p
                      className="m-0 fz:12 fw-500 text-dark"
                      style={{ width: "80px" }}
                    >
                      Email :
                    </p>
                    <p className="m-0 fz:12 fw-500 text-dark">
                      email@gmail.com
                    </p>
                  </div>
                  <div className="nav aic jcs sttr-text">
                    <p
                      className="m-0 fz:12 fw-500 text-dark"
                      style={{ width: "80px" }}
                    >
                      Rank :
                    </p>
                    <p className="m-0 fz:12 fw-500 text-dark text-uppercase">
                      BID6
                    </p>
                  </div>
                  <div className="nav aic jcs sttr-text">
                    <p
                      className="m-0 fz:12 fw-500 text-dark"
                      style={{ width: "80px" }}
                    >
                      Link Refferal:
                    </p>
                    <p className="m-0 fz:12 fw-500 text-dark">
                      https://bidbox/.com/s/z8HXL
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
