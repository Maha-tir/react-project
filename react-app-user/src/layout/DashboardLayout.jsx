import React, { useEffect, useState } from "react";
import BottomBar from "./BottomBar";
import { Route, Link, useHistory, useLocation } from "react-router-dom";
import axios from "axios";

const DashboardLayout = (props) => {
  const [user, setUser] = useState([]);

  const location = useLocation();

  const jwt_token = localStorage.getItem("jwt_token");

  let history = useHistory();

  // useEffect(() => {
  //   if (jwt_token && user) {
  //     const config = {
  //       headers: {
  //         Authorization: `Bearer ` + localStorage.getItem("jwt_token"),
  //       },
  //       method: "get",
  //       url: `http://159.223.94.86:3000/auth/refresh-token/${jwt_token.replace(
  //         /['"]+/g,
  //         ""
  //       )}`,
  //     };

  //     axios(config)
  //       .then(function (response) {
  //         // console.log(response);
  //         setUser(response.data);
  //         // console.log(user);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   } else {
  //     console.log("Error");
  //     history.push("/auth/signin");
  //   }
  // }, [user]);

  // useEffect(() => {
  //   if (!jwt_token) {
  //     history.push("/auth/signin");
  //   } else if (jwt_token) {

  //   }
  // }, []);

  return (
    <div className="sch-Vxwmb">
      <div className="sch-mobile">
        {props.children}
        {location.pathname == "/user/dashboard" ||
        location.pathname == "/user/trades" ||
        location.pathname == "/user/bot-setting" ||
        location.pathname == "/user/news" ||
        location.pathname == "/user/account" ? (
          <Route render={(props) => <BottomBar {...props} />} />
        ) : null}
      </div>
    </div>
  );
};

export default DashboardLayout;
