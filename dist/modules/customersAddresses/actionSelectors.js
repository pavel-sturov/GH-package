import { CUSTOMER_ADDRESSES_ACTION } from "./actionTypes";
export var CustomerAddressesSelectors = {
  list: function list(state) {
    return state.customersAddresses[CUSTOMER_ADDRESSES_ACTION.LIST];
  },
  create: function create(state) {
    return state.customersAddresses[CUSTOMER_ADDRESSES_ACTION.CREATE];
  },
  view: function view(state) {
    return state.customersAddresses[CUSTOMER_ADDRESSES_ACTION.VIEW];
  },
  "delete": function _delete(state) {
    return state.customersAddresses[CUSTOMER_ADDRESSES_ACTION.DELETE];
  },
  update: function update(state) {
    return state.customersAddresses[CUSTOMER_ADDRESSES_ACTION.UPDATE];
  }
};