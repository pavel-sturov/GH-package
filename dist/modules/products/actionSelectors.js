"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsStateSelectors = void 0;

var _actionTypes = require("./actionTypes");

var ProductsStateSelectors = {
  view: function view(state) {
    return state.products[_actionTypes.PRODUCTS_ACTIONS.VIEW];
  },
  viewBarcode: function viewBarcode(state) {
    return state.products[_actionTypes.PRODUCTS_ACTIONS.VIEW_BARCODE];
  },
  list: function list(state) {
    return state.products[_actionTypes.PRODUCTS_ACTIONS.LIST];
  },
  search: function search(state) {
    return state.products[_actionTypes.PRODUCTS_ACTIONS.SEARCH];
  },
  create: function create(state) {
    return state.products[_actionTypes.PRODUCTS_ACTIONS.CREATE];
  },
  "delete": function _delete(state) {
    return state.products[_actionTypes.PRODUCTS_ACTIONS.DELETE];
  },
  update: function update(state) {
    return state.products[_actionTypes.PRODUCTS_ACTIONS.UPDATE];
  },
  addToStock: function addToStock(state) {
    return state.products[_actionTypes.PRODUCTS_ACTIONS.ADD_TO_STOCK];
  },
  batchUpload: function batchUpload(state) {
    return state.products[_actionTypes.PRODUCTS_ACTIONS.BATCH_UPLOAD];
  }
};
exports.ProductsStateSelectors = ProductsStateSelectors;