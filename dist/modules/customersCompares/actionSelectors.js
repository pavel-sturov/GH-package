"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomerComparesSelectors = void 0;

var _actionTypes = require("./actionTypes");

var CustomerComparesSelectors = {
  list: function list(state) {
    return state.customersCompares[_actionTypes.COMPARES_ACTION.LIST];
  },
  create: function create(state) {
    return state.customersCompares[_actionTypes.COMPARES_ACTION.CREATE];
  },
  view: function view(state) {
    return state.customersCompares[_actionTypes.COMPARES_ACTION.VIEW];
  },
  "delete": function _delete(state) {
    return state.customersCompares[_actionTypes.COMPARES_ACTION.DELETE];
  },
  deleteAll: function deleteAll(state) {
    return state.customersCompares[_actionTypes.COMPARES_ACTION.DELETE_ALL];
  },
  hierarchical: function hierarchical(state) {
    return state.customersCompares[_actionTypes.COMPARES_ACTION.HIERARCHICAL];
  },
  products: function products(state) {
    return state.customersCompares[_actionTypes.COMPARES_ACTION.PRODUCTS];
  }
};
exports.CustomerComparesSelectors = CustomerComparesSelectors;