import { CUSTOMER_ACTIONS } from "./actionTypes";
export var CustomersStateSelectors = {
  create: function create(state) {
    return state.customers[CUSTOMER_ACTIONS.CREATE];
  },
  view: function view(state) {
    return state.customers[CUSTOMER_ACTIONS.VIEW];
  },
  list: function list(state) {
    return state.customers[CUSTOMER_ACTIONS.LIST];
  },
  update: function update(state) {
    return state.customers[CUSTOMER_ACTIONS.UPDATE];
  },
  "delete": function _delete(state) {
    return state.customers[CUSTOMER_ACTIONS.DELETE];
  },
  sendPush: function sendPush(state) {
    return state.customers[CUSTOMER_ACTIONS.SEND_PUSH];
  }
};