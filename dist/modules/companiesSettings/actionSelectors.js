"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompaniesSettingsSelectors = void 0;

var _actionTypes = require("./actionTypes");

var CompaniesSettingsSelectors = {
  view: function view(state) {
    return state.companiesSettings[_actionTypes.COMPANIES_SETTINGS_ACTIONS.VIEW];
  },
  update: function update(state) {
    return state.companiesSettings[_actionTypes.COMPANIES_SETTINGS_ACTIONS.UPDATE];
  }
};
exports.CompaniesSettingsSelectors = CompaniesSettingsSelectors;