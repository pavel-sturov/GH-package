"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoriesStateSelectors = void 0;

var _actionTypes = require("./actionTypes");

var CategoriesStateSelectors = {
  create: function create(state) {
    return state.categories[_actionTypes.CATEGORY_ACTION.CREATE];
  },
  view: function view(state) {
    return state.categories[_actionTypes.CATEGORY_ACTION.VIEW];
  },
  list: function list(state) {
    return state.categories[_actionTypes.CATEGORY_ACTION.LIST];
  },
  update: function update(state) {
    return state.categories[_actionTypes.CATEGORY_ACTION.UPDATE];
  },
  "delete": function _delete(state) {
    return state.categories[_actionTypes.CATEGORY_ACTION.DELETE];
  },
  getHierarchical: function getHierarchical(state) {
    return state.categories[_actionTypes.CATEGORY_ACTION.FETCH_HIERARCHICAL];
  },
  getHomeCategories: function getHomeCategories(state) {
    return state.categories[_actionTypes.CATEGORY_ACTION.HOME_CATEGORIES];
  },
  filters: function filters(state) {
    return state.categories[_actionTypes.CATEGORY_ACTION.FILTERS];
  }
};
exports.CategoriesStateSelectors = CategoriesStateSelectors;