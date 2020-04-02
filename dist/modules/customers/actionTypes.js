"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CUSTOMER_ACTIONS = void 0;
var CUSTOMER_ACTIONS = {
  CREATE: 'CUSTOMERS_CREATE',
  VIEW: 'CUSTOMERS_VIEW',
  LIST: 'CUSTOMERS_LIST',
  UPDATE: 'CUSTOMERS_UPDATE',
  DELETE: 'CUSTOMERS_DELETE',
  SEND_PUSH: 'CUSTOMERS_SEND_PUSH'
};
exports.CUSTOMER_ACTIONS = CUSTOMER_ACTIONS;