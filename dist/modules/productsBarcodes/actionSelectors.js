"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsBarcodesStateSelectors = void 0;

var _actionTypes = require("./actionTypes");

var ProductsBarcodesStateSelectors = {
  list: function list(state) {
    return state.productsBarcodes[_actionTypes.PRODUCTS_BARCODES_ACTIONS.LIST];
  },
  create: function create(state) {
    return state.productsBarcodes[_actionTypes.PRODUCTS_BARCODES_ACTIONS.CREATE];
  },
  "delete": function _delete(state) {
    return state.productsBarcodes[_actionTypes.PRODUCTS_BARCODES_ACTIONS.DELETE];
  },
  update: function update(state) {
    return state.productsBarcodes[_actionTypes.PRODUCTS_BARCODES_ACTIONS.UPDATE];
  }
};
exports.ProductsBarcodesStateSelectors = ProductsBarcodesStateSelectors;