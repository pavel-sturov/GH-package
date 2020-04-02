import { CUSTOMER_AUTH_METHOD_ACTIONS } from "./actionTypes";
export var CustomerAuthMethodSelectors = {
  list: function list(state) {
    return state.customersAuthMethods[CUSTOMER_AUTH_METHOD_ACTIONS.LIST];
  },
  view: function view(state) {
    return state.customersAuthMethods[CUSTOMER_AUTH_METHOD_ACTIONS.VIEW];
  },
  update: function update(state) {
    return state.customersAuthMethods[CUSTOMER_AUTH_METHOD_ACTIONS.UPDATE];
  }
};