"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FaqCategoriesStateSelectors = void 0;

var _actionTypes = require("./actionTypes");

var FaqCategoriesStateSelectors = {
  create: function create(state) {
    return state.faq.categories[_actionTypes.FAQ_CATEGORIES_ACTIONS.CREATE];
  },
  view: function view(state) {
    return state.faq.categories[_actionTypes.FAQ_CATEGORIES_ACTIONS.VIEW];
  },
  list: function list(state) {
    return state.faq.categories[_actionTypes.FAQ_CATEGORIES_ACTIONS.LIST];
  },
  update: function update(state) {
    return state.faq.categories[_actionTypes.FAQ_CATEGORIES_ACTIONS.UPDATE];
  },
  "delete": function _delete(state) {
    return state.faq.categories[_actionTypes.FAQ_CATEGORIES_ACTIONS.DELETE];
  }
};
exports.FaqCategoriesStateSelectors = FaqCategoriesStateSelectors;