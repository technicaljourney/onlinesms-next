import { combineReducers } from "redux";
import smsTextReducer from "./smsTextReducer";

export default combineReducers({
  smstext: smsTextReducer,
});
