import React from "react";

import Signin from "../pages/Auth/Signin";
import Signup from "../pages/Auth/Signup";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import SetNewPassword from "../pages/Auth/SetNewPassword";

import Dashboard from "../pages/User/Dashboard";
import News from "../pages/User/News";
import Account from "../pages/User/Account";
import Deposit from "../pages/User/Deposit";
import Affiliate from "../pages/User/Affiliate";
import Asset from "../pages/User/Asset";
import RewardDetail from "../pages/User/RewardDetail";
import Withdraw from "../pages/User/Withdraw";

const authRoutes = [
  { path: "/signin", component: Signin },
  { path: "/signup", component: Signup },
  { path: "/forgot-password", component: ForgotPassword },
  { path: "/set-new-password", component: SetNewPassword },
];

const userRoutes = [
  { path: "/user/dashboard", component: Dashboard },
  { path: "/user/news", component: News },
  { path: "/user/account", component: Account },
  { path: "/user/deposit", component: Deposit },
  { path: "/user/affiliate", component: Affiliate },
  { path: "/user/asset", component: Asset },
  { path: "/user/reward-detail", component: RewardDetail },
  { path: "/user/withdraw", component: Withdraw },
];

export { authRoutes, userRoutes };
