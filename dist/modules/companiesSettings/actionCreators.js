"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompaniesSettingsActions = void 0;

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CompaniesSettingsActions = {
  view: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.COMPANIES_SETTINGS_ACTIONS.VIEW),
  update: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.COMPANIES_SETTINGS_ACTIONS.UPDATE)
};
exports.CompaniesSettingsActions = CompaniesSettingsActions;