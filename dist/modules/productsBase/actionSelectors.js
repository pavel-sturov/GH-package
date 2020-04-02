"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsBaseStateSelectors = void 0;

var _actionTypes = require("./actionTypes");

var ProductsBaseStateSelectors = {
  view: function view(state) {
    return state.productsBase[_actionTypes.PRODUCTS_BASE_ACTIONS.VIEW];
  },
  list: function list(state) {
    return state.productsBase[_actionTypes.PRODUCTS_BASE_ACTIONS.LIST];
  },
  printEpc: function printEpc(state) {
    return state.productsBase[_actionTypes.PRODUCTS_BASE_ACTIONS.PRINT_EPC];
  },
  deleteEpc: function deleteEpc(state) {
    return state.productsBase[_actionTypes.PRODUCTS_BASE_ACTIONS.DELETE_EPC];
  },
  differenceZoneTags: function differenceZoneTags(state) {
    return state.productsBase[_actionTypes.PRODUCTS_BASE_ACTIONS.DIFFERENCE_ZONE_TAGS];
  },
  updateAll: function updateAll(state) {
    return state.productsBase[_actionTypes.PRODUCTS_BASE_ACTIONS.UPDATE_ALL];
  },
  update: function update(state) {
    return state.productsBase[_actionTypes.PRODUCTS_BASE_ACTIONS.UPDATE];
  },
  setDefective: function setDefective(state) {
    return state.productsBase[_actionTypes.PRODUCTS_BASE_ACTIONS.SET_DEFECTIVE];
  },
  transfer: function transfer(state) {
    return state.productsBase[_actionTypes.PRODUCTS_BASE_ACTIONS.TRANSFER];
  }
};
exports.ProductsBaseStateSelectors = ProductsBaseStateSelectors;