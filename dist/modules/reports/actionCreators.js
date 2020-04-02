"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportsActions = void 0;

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ReportsActions = {
  view: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.REPORTS_ACTIONS.VIEW),
  generate: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.REPORTS_ACTIONS.GENERATE)
};
exports.ReportsActions = ReportsActions;