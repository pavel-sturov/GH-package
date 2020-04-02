"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogsActions = void 0;

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LogsActions = {
  list: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.LOGS_ACTION.LIST),
  view: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.LOGS_ACTION.VIEW),
  "delete": _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.LOGS_ACTION.DELETE),
  deleteAll: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.LOGS_ACTION.DELETE_ALL)
};
exports.LogsActions = LogsActions;