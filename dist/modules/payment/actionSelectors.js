import { PAYMENT_ACTION } from "./actionTypes";
export var PaymentStateSelectors = {
  list: function list(state) {
    return state.payment[PAYMENT_ACTION.LIST];
  },
  create: function create(state) {
    return state.payment[PAYMENT_ACTION.CREATE];
  },
  postSecure: function postSecure(state) {
    return state.payment[PAYMENT_ACTION.POST_SECURE];
  },
  createWithRedirect: function createWithRedirect(state) {
    return state.payment[PAYMENT_ACTION.CREATE_WITH_REDIRECT];
  },
  view: function view(state) {
    return state.payment[PAYMENT_ACTION.VIEW];
  },
  setMain: function setMain(state) {
    return state.payment[PAYMENT_ACTION.SET_MAIN];
  }
};