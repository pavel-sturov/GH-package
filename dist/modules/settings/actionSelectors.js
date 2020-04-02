"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsStateSelectors = void 0;

var _actionTypes = require("./actionTypes");

var SettingsStateSelectors = {
  listAvailable: function listAvailable(state) {
    return state.settings[_actionTypes.SETTINGS_ACTION.LIST_AVAILABLE];
  },
  update: function update(state) {
    return state.settings[_actionTypes.SETTINGS_ACTION.UPDATE];
  },
  list: function list(state) {
    return state.settings[_actionTypes.SETTINGS_ACTION.LIST];
  },
  view: function view(state) {
    return state.settings[_actionTypes.SETTINGS_ACTION.VIEW];
  }
};
exports.SettingsStateSelectors = SettingsStateSelectors;