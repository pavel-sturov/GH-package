"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomersSettingsStateSelectors = void 0;

var _actionTypes = require("./actionTypes");

var CustomersSettingsStateSelectors = {
  view: function view(state) {
    return state.customersSettings[_actionTypes.CUSTOMER_SETTINGS_ACTIONS.VIEW];
  },
  update: function update(state) {
    return state.customersSettings[_actionTypes.CUSTOMER_SETTINGS_ACTIONS.UPDATE];
  }
};
exports.CustomersSettingsStateSelectors = CustomersSettingsStateSelectors;