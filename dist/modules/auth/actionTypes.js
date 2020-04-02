"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AUTH_ACTION = void 0;
var AUTH_ACTION = {
  SIGN_IN: 'SIGN_IN',
  LOG_OUT: 'LOG_OUT',
  RENEW_TOKEN: 'RENEW_TOKEN'
};
exports.AUTH_ACTION = AUTH_ACTION;