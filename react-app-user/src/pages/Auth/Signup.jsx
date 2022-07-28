import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../styles/auth.css";

import Taost from "../../components/ToastAlert/Taost";
import Indonesia from "../../assets/img/flag/indonesia.png";

const Signup = (props) => {
  const [country, setCountry] =  useState([])
  const [timezones, setTimezones] =  useState([])
  const [alert, setAlert] = useState(null);
  const [phone,setPhone] = useState(null)
  const [full_name,setFullname] = useState(null)
  const [security_pin,setSecurityPin] = useState(null)
  const [security_pin_repeat,setSecurityPinRepeat] = useState(null)
  const [countrySelected,setCountrySelected] = useState(null)
  const [timezonesSelected,setTimezonesSelected] = useState(null)
  const [username,setUsername] = useState(null)
  const [password,setPassword] = useState(null)
  const [confirmPassword,setConfirmPassword] = useState(null)
  const [email,setEmail] = useState(null)
  const [otp,setOtp] = useState(null)
  const [sponsor,setSponsor] = useState(null)
  const [agreement,setAgreement] = useState(false)
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
  const get_country = () => {
    var config = {
        method: "get",
        url: "http://159.223.94.86:3000/site/countries"
    };
    
    axios(config)
    .then(function (response) {
      const data = response.data
      let cnt = []
      data.countries.forEach(el => {
        cnt.push({
          id : el.id,
          name : el.name
        })
      });
      setCountry(cnt)
    })
    .catch(function (error) {
        // const response = error.response
        console.log(error);
    });
  }
  const get_timezone = () => {
    var config = {
        method: "get",
        url: "http://159.223.94.86:3000/site/timezones"
    };
    
    axios(config)
    .then(function (response) {
      const data = response.data
      let cnt = []
      data.timezones.forEach(el => {
        cnt.push({
          country_code : el.country_code,
          timezone : el.timezone
        })
      });
      setTimezones(cnt)
    })
    .catch(function (error) {
        // const response = error.response
        console.log(error);
    });
  }
  const get_otp = () => {
    if (email === null){
      setAlert({
        type: 'danger',
        message:'please enter your email'
      })
    }else{
      let data = JSON.stringify({
        "address": email,
        "target": 0,
    });

    var config = {
        method: "post",
        url: "http://159.223.94.86:3000/auth/request-otp",
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
    };
      axios(config)
      .then(function (response) {
        setOtp(response.data)
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
  const doSignup = () => {
    if (security_pin === null || security_pin_repeat === null || full_name === null || phone === null || countrySelected === null || timezonesSelected === null || username === null ||
      password === null || confirmPassword === null || email === null || otp === null || sponsor === null ||
      agreement === null){
        setAlert({
          type: 'danger',
          message:'please complete the form below'
        })
      }else if(password !== confirmPassword){
        setAlert({
          type: 'danger',
          message:'password with password confirmation does not match'
        })
      }else if(security_pin !== security_pin_repeat){
        setAlert({
          type: 'danger',
          message:'security pin with security pin confirmation does not match'
        })
      }else if(agreement !== true){
        setAlert({
          type: 'danger',
          message:'You haven\'t checked the terms conditions'
        })
      }else{
        setAlert({
          type: 'default',
          message:'Data is being processed'
        })
        let data = JSON.stringify({
          "captcha": "iuieys",
          "country": countrySelected,
          "email": email,
          "full_name": full_name,
          "otp": otp,
          "password": password,
          "password_repeat": confirmPassword,
          "phone": phone,
          "referrer_username": sponsor,
          "security_pin": parseInt(security_pin),
          "security_pin_repeat": parseInt(security_pin_repeat),
          "timezone": timezonesSelected,
          "username": username
      });

      var config = {
          method: "post",
          url: "http://159.223.94.86:3000/auth/signup",
          headers: {
              "Content-Type": "application/json",
          },
          data: data,
      };
      
        axios(config)
        .then(function (response) {
          setAlert({
              type:'success',
              message:"registration is successful, please wait we will redirect to the login page"
          })
          setTimeout(() => {
            props.history.push('/auth/signin')
          }, 3000);
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
  useEffect(()=>{
    get_country()
    get_timezone()
  },[])
  return (
    <div className="sc-sign-up">
      <div className="sc-content-all">
        <h2 className="sttr-text fz:22 text-center">Welcome You To Join</h2>
    {showAlert()}
        <form action="" className="form-validation">
          <div className="input-group">
            <label className="input-label">Country</label>
              
            <select className="form-select" onChange={evt => setCountrySelected(evt.target.value)}>
            <option defaultValue="0" selected disabled className="selected">
                Select your country
              </option>
              {country.map((country, index) => (
                // <option value={index}>
                //   <div className="icon">
                //     <img src={country.flag} alt="" />
                //   </div>
                //   {country.name_country}
                // </option>
                <option className="option" value={country.id} key={index}>
                  <img src={country.id} alt="" />
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label className="input-label">Time Zone</label>
            <select className="form-select" onChange={evt => setTimezonesSelected(evt.target.value)}>
              <option defaultValue="0" selected disabled className="selected">
                Select your time zone
              </option>
              {timezones.map((timezone, index) => (
                // <option value={index}>
                //   <div className="icon">
                //     <img src={country.flag} alt="" />
                //   </div>
                //   {country.name_country}
                // </option>
                <option className="option" value={timezone.timezone} key={index}>
                  <img src={timezone.country_code} alt="" />
                  {timezone.timezone}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <div className="input-field not-icon">
              <input
                type="text"
                id="full_name"
                placeholder="Full Name"
                className="input-control"
                onChange={evt => setFullname(evt.target.value)}
                required
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-field not-icon">
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="input-control"
                onChange={evt => setUsername(evt.target.value)}
                required
              />
            </div>
          </div>
          <div className="input-group mb-1">
            <div className="input-field not-icon">
              <input
                type="password"
                id="password"
                placeholder="Password"
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
                placeholder="Confirm password"
                className="input-control"
                onChange={evt => setConfirmPassword(evt.target.value)}
                required
              />
            </div>
          </div>
          <div className="input-group mb-1">
            <div className="input-field not-icon">
              <input
                type="password"
                id="security_pin"
                placeholder="Security PIN"
                className="input-control"
                onChange={evt => setSecurityPin(evt.target.value)}
                required
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-field not-icon">
              <input
                type="password"
                id="security_pin_repeat"
                placeholder="Confim Security PIN"
                className="input-control"
                onChange={evt => setSecurityPinRepeat(evt.target.value)}
                required
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-field not-icon">
              <input
                type="text"
                id="phone"
                placeholder="Phone"
                className="input-control"
                onChange={evt => setPhone(evt.target.value)}
                required
              />
            </div>
          </div>
          <div className="input-group mb-1">
            <label className="input-label">Email</label>
            <div className="input-field not-icon">
              <input
                type="text"
                id="email"
                onChange={evt => setEmail(evt.target.value)}
                placeholder="example@gmail.com"
                className="input-control"
                required
              />
            </div>
          </div>
          <div className="flex-input-group">
            <div className="input-group">
              <div className="input-field not-icon">
                <input
                  type="text"
                  id="otp-email"
                  placeholder="OTP Email"
                  className="input-control"
                  value={otp}
                  onChange={evt => setOtp(evt.target.value)}
                  required
                />
              </div>
            </div>
            <div className="input-group-2">
              <button type="button" onClick={get_otp} className="sc-get-btn">Get OTP</button>
            </div>
          </div>
          <div className="input-group">
            <label className="input-label">Sponsor</label>
            <div className="input-field not-icon">
              <input
                type="text"
                id="sponsor"
                onChange={evt => setSponsor(evt.target.value)}
                placeholder="Sponsor Username"
                className="input-control"
                required
              />
            </div>
          </div>
          <div className="input-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                onClick={(evt) => {
                  if (evt.target.checked){
                    setAgreement(true)
                  }else{
                    setAgreement(false)
                  }
                }}
                id="termcondition"
              />
              <label
                className="form-check-label fz:14 text-mute cursor:pointer"
                htmlFor="termcondition"
              >
                I Have Read Term & Conditions
              </label>
            </div>
          </div>
          <button onClick={doSignup} type="button" className="sc-sign-btn">Sign Up</button>
          <div className="my-2 text-center">
            <p className="fz:15 text-mute fw-500">
              Already have account ?
              <Link
                to="/auth/signin"
                className="text-link fz:14 ms-1 text-uppercase"
              >
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
