"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ORDERS_ACTION = void 0;
var ORDERS_ACTION = {
  VIEW: 'ORDERS_VIEW',
  LIST: 'ORDERS_LIST',
  PAY: 'ORDERS_PAY',
  FINISH_BY_PRODUCT: 'ORDERS_FINISH_BY_PRODUCT',
  CANCEL_BY_PRODUCT: 'ORDERS_CANCEL_BY_PRODUCT'
};
exports.ORDERS_ACTION = ORDERS_ACTION;