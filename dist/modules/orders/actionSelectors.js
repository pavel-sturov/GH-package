"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersStateSelectors = void 0;

var _actionTypes = require("./actionTypes");

var OrdersStateSelectors = {
  list: function list(state) {
    return state.orders[_actionTypes.ORDERS_ACTION.LIST];
  },
  view: function view(state) {
    return state.orders[_actionTypes.ORDERS_ACTION.VIEW];
  },
  pay: function pay(state) {
    return state.orders[_actionTypes.ORDERS_ACTION.PAY];
  },
  finishByProduct: function finishByProduct(state) {
    return state.orders[_actionTypes.ORDERS_ACTION.FINISH_BY_PRODUCT];
  },
  cancelByProduct: function cancelByProduct(state) {
    return state.orders[_actionTypes.ORDERS_ACTION.CANCEL_BY_PRODUCT];
  }
};
exports.OrdersStateSelectors = OrdersStateSelectors;