"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomerFavoriteSelectors = void 0;

var _actionTypes = require("./actionTypes");

var CustomerFavoriteSelectors = {
  list: function list(state) {
    return state.customersFavorites[_actionTypes.FAVORITE_ACTION.LIST];
  },
  create: function create(state) {
    return state.customersFavorites[_actionTypes.FAVORITE_ACTION.CREATE];
  },
  view: function view(state) {
    return state.customersFavorites[_actionTypes.FAVORITE_ACTION.VIEW];
  },
  "delete": function _delete(state) {
    return state.customersFavorites[_actionTypes.FAVORITE_ACTION.DELETE];
  },
  deleteAll: function deleteAll(state) {
    return state.customersFavorites[_actionTypes.FAVORITE_ACTION.DELETE_ALL];
  }
};
exports.CustomerFavoriteSelectors = CustomerFavoriteSelectors;