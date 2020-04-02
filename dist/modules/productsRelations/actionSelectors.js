"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsRelationsStateSelectors = void 0;

var _actionTypes = require("./actionTypes");

var ProductsRelationsStateSelectors = {
  view: function view(state) {
    return state.productsRelations[_actionTypes.PRODUCTS_RELATIONS_ACTIONS.VIEW];
  },
  list: function list(state) {
    return state.productsRelations[_actionTypes.PRODUCTS_RELATIONS_ACTIONS.LIST];
  },
  create: function create(state) {
    return state.productsRelations[_actionTypes.PRODUCTS_RELATIONS_ACTIONS.CREATE];
  },
  "delete": function _delete(state) {
    return state.productsRelations[_actionTypes.PRODUCTS_RELATIONS_ACTIONS.DELETE];
  }
};
exports.ProductsRelationsStateSelectors = ProductsRelationsStateSelectors;