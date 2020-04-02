"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsActions = void 0;

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SettingsActions = {
  listAvailable: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.SETTINGS_ACTION.LIST_AVAILABLE),
  update: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.SETTINGS_ACTION.UPDATE),
  list: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.SETTINGS_ACTION.LIST),
  setList: _RequestActionHelper["default"].getActionCreatorSuccess(_actionTypes.SETTINGS_ACTION.LIST),
  view: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.SETTINGS_ACTION.VIEW)
};
exports.SettingsActions = SettingsActions;