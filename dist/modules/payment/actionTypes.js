"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PAYMENT_ACTION = void 0;
var PAYMENT_ACTION = {
  LIST: 'CARD_LIST',
  CREATE: 'CARD_CREATE',
  POST_SECURE: 'POST_SECURE',
  CREATE_WITH_REDIRECT: 'CREATE_WITH_REDIRECT',
  DELETE: 'CARD_DELETE',
  SET_MAIN: 'SET_MAIN'
};
exports.PAYMENT_ACTION = PAYMENT_ACTION;