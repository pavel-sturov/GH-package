import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper';
import { PAYMENT_ACTION } from "./actionTypes";
export var PaymentActions = {
  list: RequestActionHelper.getActionCreatorFetch(PAYMENT_ACTION.LIST),
  setList: RequestActionHelper.getActionCreatorSuccess(PAYMENT_ACTION.LIST),
  create: RequestActionHelper.getActionCreatorFetch(PAYMENT_ACTION.CREATE),
  postSecure: RequestActionHelper.getActionCreatorFetch(PAYMENT_ACTION.POST_SECURE),
  createWithRedirect: RequestActionHelper.getActionCreatorFetch(PAYMENT_ACTION.CREATE_WITH_REDIRECT),
  setMain: RequestActionHelper.getActionCreatorFetch(PAYMENT_ACTION.SET_MAIN),
  "delete": RequestActionHelper.getActionCreatorFetch(PAYMENT_ACTION.DELETE)
};