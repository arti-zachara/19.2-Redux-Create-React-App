import { combineReducers } from "redux";
// ------------ inside-app imports ----------------------------------
import comments from "./comments";
import users from "./users";
// ------ imports ----------------------------

// ----- combine reducers - Redux way to bring smaller reducers together
export const reducer = combineReducers({
  comments,
  users
});
