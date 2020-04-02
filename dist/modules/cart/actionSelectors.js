"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartStateSelectors = void 0;

var _actionTypes = require("./actionTypes");

var CartStateSelectors = {
  list: function list(state) {
    return state.cart[_actionTypes.CART_ACTION.LIST];
  },
  create: function create(state) {
    return state.cart[_actionTypes.CART_ACTION.CREATE];
  },
  update: function update(state) {
    return state.cart[_actionTypes.CART_ACTION.UPDATE];
  },
  "delete": function _delete(state) {
    return state.cart[_actionTypes.CART_ACTION.DELETE];
  },
  deleteAll: function deleteAll(state) {
    return state.cart[_actionTypes.CART_ACTION.DELETE_ALL];
  },
  checkout: function checkout(state) {
    return state.cart[_actionTypes.CART_ACTION.CHECKOUT];
  },
  checkoutTerminal: function checkoutTerminal(state) {
    return state.cart[_actionTypes.CART_ACTION.CHECKOUT_TERMINAL];
  },
  createOrder: function createOrder(state) {
    return state.cart[_actionTypes.CART_ACTION.CREATE_ORDER];
  },
  createOrderTerminal: function createOrderTerminal(state) {
    return state.cart[_actionTypes.CART_ACTION.CREATE_ORDER_TERRMINAL];
  },
  startSessionTerminal: function startSessionTerminal(state) {
    return state.cart[_actionTypes.CART_ACTION.START_SESSION_TERMINAL];
  }
};
exports.CartStateSelectors = CartStateSelectors;