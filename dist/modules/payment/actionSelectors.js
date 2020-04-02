"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentStateSelectors = void 0;

var _actionTypes = require("./actionTypes");

var PaymentStateSelectors = {
  list: function list(state) {
    return state.payment[_actionTypes.PAYMENT_ACTION.LIST];
  },
  create: function create(state) {
    return state.payment[_actionTypes.PAYMENT_ACTION.CREATE];
  },
  postSecure: function postSecure(state) {
    return state.payment[_actionTypes.PAYMENT_ACTION.POST_SECURE];
  },
  createWithRedirect: function createWithRedirect(state) {
    return state.payment[_actionTypes.PAYMENT_ACTION.CREATE_WITH_REDIRECT];
  },
  view: function view(state) {
    return state.payment[_actionTypes.PAYMENT_ACTION.VIEW];
  },
  setMain: function setMain(state) {
    return state.payment[_actionTypes.PAYMENT_ACTION.SET_MAIN];
  }
};
exports.PaymentStateSelectors = PaymentStateSelectors;