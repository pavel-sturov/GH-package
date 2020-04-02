import { ORDERS_ACTION } from "./actionTypes";
export var OrdersStateSelectors = {
  list: function list(state) {
    return state.orders[ORDERS_ACTION.LIST];
  },
  view: function view(state) {
    return state.orders[ORDERS_ACTION.VIEW];
  },
  pay: function pay(state) {
    return state.orders[ORDERS_ACTION.PAY];
  },
  finishByProduct: function finishByProduct(state) {
    return state.orders[ORDERS_ACTION.FINISH_BY_PRODUCT];
  },
  cancelByProduct: function cancelByProduct(state) {
    return state.orders[ORDERS_ACTION.CANCEL_BY_PRODUCT];
  }
};