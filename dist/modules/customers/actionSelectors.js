"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomersStateSelectors = void 0;

var _actionTypes = require("./actionTypes");

var CustomersStateSelectors = {
  create: function create(state) {
    return state.customers[_actionTypes.CUSTOMER_ACTIONS.CREATE];
  },
  view: function view(state) {
    return state.customers[_actionTypes.CUSTOMER_ACTIONS.VIEW];
  },
  list: function list(state) {
    return state.customers[_actionTypes.CUSTOMER_ACTIONS.LIST];
  },
  update: function update(state) {
    return state.customers[_actionTypes.CUSTOMER_ACTIONS.UPDATE];
  },
  "delete": function _delete(state) {
    return state.customers[_actionTypes.CUSTOMER_ACTIONS.DELETE];
  },
  sendPush: function sendPush(state) {
    return state.customers[_actionTypes.CUSTOMER_ACTIONS.SEND_PUSH];
  }
};
exports.CustomersStateSelectors = CustomersStateSelectors;