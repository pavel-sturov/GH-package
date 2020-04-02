import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper';
import { AUTH_ACTION } from "./actionTypes";
export var AuthActions = {
  signIn: RequestActionHelper.getActionCreatorFetch(AUTH_ACTION.SIGN_IN),
  setAuth: RequestActionHelper.getActionCreatorSuccess(AUTH_ACTION.SIGN_IN),
  logOut: RequestActionHelper.getActionCreatorFetch(AUTH_ACTION.LOG_OUT),
  renewToken: RequestActionHelper.getActionCreatorFetch(AUTH_ACTION.RENEW_TOKEN),
  renewTokenError: RequestActionHelper.getActionCreatorError(AUTH_ACTION.RENEW_TOKEN)
};