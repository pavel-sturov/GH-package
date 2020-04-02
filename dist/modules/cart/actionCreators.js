import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper';
import { CART_ACTION } from "./actionTypes";
export var CartActions = {
  getList: RequestActionHelper.getActionCreatorFetch(CART_ACTION.LIST),
  setList: RequestActionHelper.getActionCreatorSuccess(CART_ACTION.LIST),
  create: RequestActionHelper.getActionCreatorFetch(CART_ACTION.CREATE),
  update: RequestActionHelper.getActionCreatorFetch(CART_ACTION.UPDATE),
  "delete": RequestActionHelper.getActionCreatorFetch(CART_ACTION.DELETE),
  deleteAll: RequestActionHelper.getActionCreatorFetch(CART_ACTION.DELETE_ALL),
  checkout: RequestActionHelper.getActionCreatorFetch(CART_ACTION.CHECKOUT),
  checkoutTerminal: RequestActionHelper.getActionCreatorFetch(CART_ACTION.CHECKOUT_TERMINAL),
  createOrder: RequestActionHelper.getActionCreatorFetch(CART_ACTION.CREATE_ORDER),
  createOrderTerminal: RequestActionHelper.getActionCreatorFetch(CART_ACTION.CREATE_ORDER_TERRMINAL),
  startSessionTerminal: RequestActionHelper.getActionCreatorFetch(CART_ACTION.START_SESSION_TERMINAL)
};