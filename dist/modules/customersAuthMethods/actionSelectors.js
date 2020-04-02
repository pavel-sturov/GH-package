"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomerAuthMethodSelectors = void 0;

var _actionTypes = require("./actionTypes");

var CustomerAuthMethodSelectors = {
  list: function list(state) {
    return state.customersAuthMethods[_actionTypes.CUSTOMER_AUTH_METHOD_ACTIONS.LIST];
  },
  view: function view(state) {
    return state.customersAuthMethods[_actionTypes.CUSTOMER_AUTH_METHOD_ACTIONS.VIEW];
  },
  update: function update(state) {
    return state.customersAuthMethods[_actionTypes.CUSTOMER_AUTH_METHOD_ACTIONS.UPDATE];
  }
};
exports.CustomerAuthMethodSelectors = CustomerAuthMethodSelectors;