import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import auth from "./auth/reducers";
import account from "./account/reducers";
import bot from "./bot/reducers";

const reducers = (history) => {
  return combineReducers({
    router: connectRouter(history),
    auth,
    account,
    bot
  })
} 
export default reducers