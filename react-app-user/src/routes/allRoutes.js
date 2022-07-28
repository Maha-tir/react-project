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
import Transaction from "../pages/User/Transaction";
import BotSetting from "../pages/User/BotSetting";
import HelpSupport from "../pages/User/HelpSupport";
import Profile from "../pages/User/Profile";
import ProfitTrading from "../pages/User/ProfitTrading";
import SecurityCenter from "../pages/User/SecurityCenter";
import Setting from "../pages/User/Setting";
import APIBinding from "../pages/User/APIBinding";
import NewsDetails from "../pages/User/NewsDetails";
import ChangePassword from "../pages/User/ChangePassword";
import ModifyEmail from "../pages/User/ModifyEmail";
import SecurityPin from "../pages/User/SecurityPin";
import GoogleVerificationBinding from "../pages/User/GoogleVerificationBinding";
import WithdrawalAddress from "../pages/User/WithdrawalAddress";
import BiometricsPin from "../pages/User/BiometricsPin";
import TradingProblem from "../pages/User/TradingProblem";
import AccountProblem from "../pages/User/AccountProblem";
import MoneyFlowProblem from "../pages/User/MoneyFlowProblem";
import BUGProblems from "../pages/User/BUGProblems";
import SuggestionsOptions from "../pages/User/SuggestionsOptions";
import APIBindingIssues from "../pages/User/APIBindingIssues";
import ReportViolation from "../pages/User/ReportViolation";
import Other from "../pages/User/Other";

import NotFound from "../pages/Error/NotFound";

const authRoutes = [
  { path: "/auth/signin", component: Signin },
  { path: "/auth/signup", component: Signup },
  { path: "/auth/forgot-password", component: ForgotPassword },
  { path: "/auth/set-new-password/*", component: SetNewPassword },
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
  { path: "/user/transaction", component: Transaction },
  { path: "/user/bot-setting", component: BotSetting },
  { path: "/user/help-support", component: HelpSupport },
  { path: "/user/profile", component: Profile },
  { path: "/user/profit-trading", component: ProfitTrading },
  { path: "/user/security", component: SecurityCenter },
  { path: "/user/setting", component: Setting },
  { path: "/user/change-password", component: ChangePassword },
  { path: "/user/modify-email", component: ModifyEmail },
  { path: "/user/security-pin", component: SecurityPin },
  { path: "/user/trading-problem", component: TradingProblem },
  { path: "/user/account-problem", component: AccountProblem },
  { path: "/user/money-flow-problem", component: MoneyFlowProblem },
  { path: "/user/bug-problem", component: BUGProblems },
  { path: "/user/suggestions-options", component: SuggestionsOptions },
  { path: "/user/api-binding-issues", component: APIBindingIssues },
  { path: "/user/report-violations", component: ReportViolation },
  { path: "/user/other", component: Other },
  {
    path: "/user/google-verification-binding",
    component: GoogleVerificationBinding,
  },
  {
    path: "/user/withdrawal-address",
    component: WithdrawalAddress,
  },
  {
    path: "/user/biometrics-pin",
    component: BiometricsPin,
  },
  { path: "/user/api-binding/:bind", component: APIBinding },
  { path: "/user/news-details/:id", component: NewsDetails },
];

const errorRoutes = [
  { path: "/user/*", component: NotFound },
  { path: "/auth/*", component: NotFound },
];

export { authRoutes, userRoutes, errorRoutes };
