import React,{useState} from "react";
import { Link } from "react-router-dom";
import "../../styles/auth.css";
import Taost from "../../components/ToastAlert/Taost";
import axios from "axios";

const SetNewPassword = (props) => {
  const [alert, setAlert] = useState(null);
  const [password, setPassword] = useState(null)
  const [passwordConfirm, setPasswordConfirm] = useState(null)

  const pathname = window.location.pathname; 
  const split_segment_url = pathname.split("/")
  const token_reset = split_segment_url[split_segment_url.length-1]
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
  const doReset = () => {
    if (password === null || passwordConfirm == null){
      setAlert({
          type:'danger',
          message:"Please enter a new password"
      })
    }else if(password !== passwordConfirm){
      setAlert({
          type:'danger',
          message:"the new password does not match the confirm password"
      })
    }else{
      let data = JSON.stringify({
        new_password: password,
        new_password_repeat: passwordConfirm,
        password_reset_token: token_reset
    });

    var config = {
        method: "post",
        url: "http://159.223.94.86:3000/auth/reset-password",
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
    };
    setAlert({
        type:'default',
        message:"In the process of resetting the password"
    })
    axios(config)
        .then(function (response) {
          setAlert({
              type: "success",
              message: "password has been successfully reset, please wait we will redirect to the login page",
          });
            setTimeout(() => {
              props.history.push('/auth/signin')
            }, 3000);
        })
        .catch(function (error) {
            const response = error.response;
            let message_error = response.data.message;
            if (message_error === "") {
                message_error = "Server Internal Error";
            }
            console.log(error);
            setAlert({
                type: "danger",
                message: message_error,
            });
        });
    }
  }

  return (
    <div className="sc-forgot-with-header">
    {showAlert()}  
      <header className="or-header">
        <a href="/forgot-password" className="back-button me-auto">
          <i className="fa-solid fa-angle-left back-icon"></i>
        </a>
      </header>{" "}
      <div className="d-flex align-items-center flex-column mt-4">
        <h2 className="sttr-text fz:20">Set New Password</h2>
      </div>
      <form className="form-validation pt-1">
        <div className="input-group mb-1">
          <div className="input-field not-icon">
            <input
              type="password"
              id="password"
              placeholder="New Password"
              className="input-control"
              onChange={evt => setPassword(evt.target.value)}
              required
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-field not-icon">
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm New password"
              className="input-control"
              onChange={evt => setPasswordConfirm(evt.target.value)}
              required
            />
          </div>
        </div>
        <button type="button" onClick={doReset} className="sc-sign-btn text-uppercase">Set New Password</button>
      </form>
    </div>
  );
};

export default SetNewPassword;
