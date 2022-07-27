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
        <div className="card card-overflow">
          <div className="box-grid:2 gap:2 card-profile">
            <div className="d-flex flex-column aic jcc">
              <div className="profile-image">
                <img src="" alt="_profile-image" />
              </div>
              <button className="btn-control btn-control-sm btn-control-first mt-2">
                Change Avatar
              </button>
            </div>
            <div className="profile-details">
              <div className="input-group mb-1">
                <label className="input-label text-dark text-uppercase fz:11 fw-600">
                  Your Sponsor
                </label>
                <div className="input-field-sm not-icon">
                  <input
                    type="text"
                    className="input-control input-control-sm"
                    value="Sponsor name"
                    readOnly
                  />
                </div>
              </div>
              <label className="input-label text-dark text-uppercase fz:11 fw-600">
                Your Profile
              </label>
              <div className="card card-overflow">
                <div className="py-1 px-2">
                  <table style={{ width: "100%" }}>
                    <tbody>
                      <tr>
                        <td className="fz:11 text-dark fw-500">Country</td>
                        <td className="fz:11 text-dark fw-500">:</td>
                        <td className="fz:11 text-dark fw-500">Srilanka</td>
                      </tr>
                      <tr>
                        <td className="fz:11 text-dark fw-500">Name</td>
                        <td className="fz:11 text-dark fw-500">:</td>
                        <td className="fz:11 text-dark fw-500">lorem Ipsum</td>
                      </tr>
                      <tr>
                        <td className="fz:11 text-dark fw-500">Username</td>
                        <td className="fz:11 text-dark fw-500">:</td>
                        <td className="fz:11 text-dark fw-500">lorem Ipsum</td>
                      </tr>
                      <tr>
                        <td className="fz:11 text-dark fw-500">Email</td>
                        <td className="fz:11 text-dark fw-500">:</td>
                        <td className="fz:11 text-dark fw-500">
                          email@gmail.com
                        </td>
                      </tr>
                      <tr>
                        <td className="fz:11 text-dark fw-500">Rank</td>
                        <td className="fz:11 text-dark fw-500">:</td>
                        <td className="fz:11 text-dark fw-500 text-uppercase">
                          bid6
                        </td>
                      </tr>
                      <tr>
                        <td className="fz:11 text-dark fw-500">
                          Link Refferal
                        </td>
                        <td className="fz:11 text-dark fw-500">:</td>
                        <td className="fz:11 text-dark fw-500">
                          https://bidbox.com/s/Z8HXL
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <div className="nav aic jcs sttr-text">
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
                  </div> */}
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
