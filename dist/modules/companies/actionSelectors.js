"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompaniesSelectors = void 0;

var _actionTypes = require("./actionTypes");

var CompaniesSelectors = {
  list: function list(state) {
    return state.companies[_actionTypes.COMPANIES_ACTION.LIST];
  },
  create: function create(state) {
    return state.companies[_actionTypes.COMPANIES_ACTION.CREATE];
  },
  view: function view(state) {
    return state.companies[_actionTypes.COMPANIES_ACTION.VIEW];
  },
  "delete": function _delete(state) {
    return state.companies[_actionTypes.COMPANIES_ACTION.DELETE];
  },
  update: function update(state) {
    return state.companies[_actionTypes.COMPANIES_ACTION.UPDATE];
  }
};
exports.CompaniesSelectors = CompaniesSelectors;