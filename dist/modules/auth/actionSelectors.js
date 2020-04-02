"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthStateSelectors = void 0;

var _actionTypes = require("./actionTypes");

var AuthStateSelectors = {
  isAuth: function isAuth(state) {
    return state.auth[_actionTypes.AUTH_ACTION.SIGN_IN];
  },
  isLogOut: function isLogOut(state) {
    return state.auth[_actionTypes.AUTH_ACTION.LOG_OUT];
  },
  renewToken: function renewToken(state) {
    return state.auth[_actionTypes.AUTH_ACTION.RENEW_TOKEN];
  }
};
exports.AuthStateSelectors = AuthStateSelectors;