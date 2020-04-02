"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoriesRelationsStateSelectors = void 0;

var _actionTypes = require("./actionTypes");

var CategoriesRelationsStateSelectors = {
  list: function list(state) {
    return state.categoriesRelations[_actionTypes.CATEGORIES_RELATIONS_ACTIONS.LIST];
  },
  create: function create(state) {
    return state.categoriesRelations[_actionTypes.CATEGORIES_RELATIONS_ACTIONS.CREATE];
  },
  "delete": function _delete(state) {
    return state.categoriesRelations[_actionTypes.CATEGORIES_RELATIONS_ACTIONS.DELETE];
  }
};
exports.CategoriesRelationsStateSelectors = CategoriesRelationsStateSelectors;