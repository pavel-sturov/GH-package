import { CART_ACTION } from "./actionTypes";
export var CartStateSelectors = {
  list: function list(state) {
    return state.cart[CART_ACTION.LIST];
  },
  create: function create(state) {
    return state.cart[CART_ACTION.CREATE];
  },
  update: function update(state) {
    return state.cart[CART_ACTION.UPDATE];
  },
  "delete": function _delete(state) {
    return state.cart[CART_ACTION.DELETE];
  },
  deleteAll: function deleteAll(state) {
    return state.cart[CART_ACTION.DELETE_ALL];
  },
  checkout: function checkout(state) {
    return state.cart[CART_ACTION.CHECKOUT];
  },
  checkoutTerminal: function checkoutTerminal(state) {
    return state.cart[CART_ACTION.CHECKOUT_TERMINAL];
  },
  createOrder: function createOrder(state) {
    return state.cart[CART_ACTION.CREATE_ORDER];
  },
  createOrderTerminal: function createOrderTerminal(state) {
    return state.cart[CART_ACTION.CREATE_ORDER_TERRMINAL];
  },
  startSessionTerminal: function startSessionTerminal(state) {
    return state.cart[CART_ACTION.START_SESSION_TERMINAL];
  }
};