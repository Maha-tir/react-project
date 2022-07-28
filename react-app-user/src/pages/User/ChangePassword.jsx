import React, {useState} from "react";

import Taost from "../../components/ToastAlert/Taost";
import { connect, useSelector } from "react-redux";
import axios from "axios";

const ChangePassword = (props) => {
  const [oldPassword,setOldPassword] = useState(null)
  const [password,setPassword] = useState(null)
  const [passwordConfirm,setPasswordConfirm] = useState(null)
  const [secPin,setSecPin] = useState(null)
  const [alert, setAlert] = useState(null);
  const auth = useSelector((state) => state.auth);

  
  const showAlert = () => {
    if (alert !== null) {
        return (
            <Taost
                message={alert.message}
                position="middle-top"
                type={alert.type}
            />
        );
    }
};
  const backHistory = () => {
    window.history.back();
  };
  const changePassword = () => {
    if (oldPassword === null || password === null || passwordConfirm === null || secPin === null){
      setAlert({
        type: 'danger',
        message:'please complete the form below'
      })
    }else{
      setAlert({
        type: 'default',
        message:'Loading...'
      })
      let data = JSON.stringify({
        "new_password": password,
        "new_password_repeat": passwordConfirm,
        "old_password": oldPassword,
        "security_pin": parseInt(secPin),
    });

    var config = {
        method: "post",
        url: "http://159.223.94.86:3000/strict/user/change-password",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth.token}`,
        },
        data: data,
    };
    
      axios(config)
      .then(function (response) {
        setAlert({
            type:'success',
            message:"Change Password is successful"
        })
      })
      .catch(function (error) {
          const response = error.response
          let message_error = response.data.message
          if (message_error === ""){
            message_error = "Server Internal Error"
          }
          console.log(error);
          setAlert({
              type:'danger',
              message:message_error
          })
      });
    }
  }
  return (
    <div className="sc-dbhs">
      {showAlert()}
      <header className="or-header">
        <button className="back-button me-auto" onClick={backHistory}>
          <i className="fa-solid fa-angle-left back-icon"></i>
        </button>
        <span className="text-uppercase fw-500 me-auto">Change Password</span>
      </header>
      <div className="dbhs-content">    
        <div className="input-group">
          <div className="input-field not-icon mt-0">
            <input
              type="password"
              id="order-id"
              placeholder="Input New Password"
              className="input-control"
              onChange={evt => setPassword(evt.target.value)}
              required
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-field not-icon mt-0">
            <input
              type="password"
              id="order-id"
              onChange={evt => setPasswordConfirm(evt.target.value)}
              placeholder="Re-type New Password"
              className="input-control"
              required
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-field not-icon mt-0">
            <input
              type="password"
              id="order-id"
              onChange={evt => setOldPassword(evt.target.value)}
              placeholder="Input Old Password"
              className="input-control"
              required
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-field not-icon mt-0">
            <input
              type="password"
              id="security-pin"
              onChange={evt => setSecPin(evt.target.value)}
              placeholder="Input Security PIN"
              className="input-control"
              required
            />
          </div>
        </div>
        {/* <div className="input-group">
          <div className="input-field not-icon mt-0">
            <input
              type="text"
              id="order-id"
              placeholder="Input Email Verification Code"
              className="input-control"
              required
            />
            <button
              type="button"
              className="btn-input-absolute fz:13 px-3 text-dark border-none bg-gray fw:300 text-uppercase me-1"
              style={{ height: "27px" }}
            >
              Send
            </button>
          </div>
        </div> */}
        <div className="mt-2">
          <button type="button" onClick={changePassword} className="sc-sign-btn text-uppercase mt-3">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default connect()(ChangePassword);
