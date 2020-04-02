"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PRODUCTS_ACTIONS = void 0;
var PRODUCTS_ACTIONS = {
  VIEW: 'PRODUCTS_VIEW',
  VIEW_BARCODE: 'PRODUCTS_VIEW_BARCODE',
  LIST: 'PRODUCTS_LIST',
  SEARCH: 'PRODUCTS_SEARCH',
  CREATE: 'PRODUCTS_CREATE',
  UPDATE: 'PRODUCTS_UPDATE',
  DELETE: 'PRODUCTS_DELETE',
  ADD_TO_STOCK: 'PRODUCTS_ADD_TO_STOCK',
  BATCH_UPLOAD: 'PRODUCTS_BATCH_UPLOAD'
};
exports.PRODUCTS_ACTIONS = PRODUCTS_ACTIONS;