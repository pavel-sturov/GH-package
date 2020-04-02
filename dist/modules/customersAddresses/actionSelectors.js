"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomerAddressesSelectors = void 0;

var _actionTypes = require("./actionTypes");

var CustomerAddressesSelectors = {
  list: function list(state) {
    return state.customersAddresses[_actionTypes.CUSTOMER_ADDRESSES_ACTION.LIST];
  },
  create: function create(state) {
    return state.customersAddresses[_actionTypes.CUSTOMER_ADDRESSES_ACTION.CREATE];
  },
  view: function view(state) {
    return state.customersAddresses[_actionTypes.CUSTOMER_ADDRESSES_ACTION.VIEW];
  },
  "delete": function _delete(state) {
    return state.customersAddresses[_actionTypes.CUSTOMER_ADDRESSES_ACTION.DELETE];
  },
  update: function update(state) {
    return state.customersAddresses[_actionTypes.CUSTOMER_ADDRESSES_ACTION.UPDATE];
  }
};
exports.CustomerAddressesSelectors = CustomerAddressesSelectors;