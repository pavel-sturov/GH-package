"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoriesEntitiesStateSelectors = void 0;

var _actionTypes = require("./actionTypes");

var CategoriesEntitiesStateSelectors = {
  list: function list(state) {
    return state.categoriesEntities[_actionTypes.CATEGORIES_ENTITIES_ACTIONS.LIST];
  },
  create: function create(state) {
    return state.categoriesEntities[_actionTypes.CATEGORIES_ENTITIES_ACTIONS.CREATE];
  },
  "delete": function _delete(state) {
    return state.categoriesEntities[_actionTypes.CATEGORIES_ENTITIES_ACTIONS.DELETE];
  }
};
exports.CategoriesEntitiesStateSelectors = CategoriesEntitiesStateSelectors;