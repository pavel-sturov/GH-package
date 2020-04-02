import { AUTH_ACTION } from "./actionTypes";
export var AuthStateSelectors = {
  isAuth: function isAuth(state) {
    return state.auth[AUTH_ACTION.SIGN_IN];
  },
  isLogOut: function isLogOut(state) {
    return state.auth[AUTH_ACTION.LOG_OUT];
  },
  renewToken: function renewToken(state) {
    return state.auth[AUTH_ACTION.RENEW_TOKEN];
  }
};