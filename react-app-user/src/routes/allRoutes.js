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
import Transfer from "../pages/User/Transfer";
import Trades from "../pages/User/Trades";
import BotSetting from "../pages/User/BotSetting";
import HelpSupport from "../pages/User/HelpSupport";
import Profile from "../pages/User/Profile";
import SecurityCenter from "../pages/User/SecurityCenter";
import Setting from "../pages/User/Setting";

import NotFound from "../pages/Error/NotFound";
import { Redirect } from "react-router-dom";

const authRoutes = [
  { path: "/auth/signin", component: Signin },
  { path: "/auth/signup", component: Signup },
  { path: "/auth/forgot-password", component: ForgotPassword },
  { path: "/auth/set-new-password", component: SetNewPassword },
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
  { path: "/user/transfer", component: Transfer },
  { path: "/user/trades", component: Trades },
  { path: "/user/bot-setting", component: BotSetting },
  { path: "/user/help-support", component: HelpSupport },
  { path: "/user/profile", component: Profile },
  { path: "/user/security", component: SecurityCenter },
  { path: "/user/setting", component: Setting },
];

const errorRoutes = [
  { path: "/user/*", component: NotFound },
  { path: "/auth/*", component: NotFound },
];

export { authRoutes, userRoutes, errorRoutes };
