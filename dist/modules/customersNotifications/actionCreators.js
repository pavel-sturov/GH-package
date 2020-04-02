"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomerNotificationsActions = void 0;

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CustomerNotificationsActions = {
  list: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.NOTIFICATIONS_ACTIONS.LIST),
  smartList: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.NOTIFICATIONS_ACTIONS.SMART_LIST),
  setList: _RequestActionHelper["default"].getActionCreatorSuccess(_actionTypes.NOTIFICATIONS_ACTIONS.LIST),
  setSmartList: _RequestActionHelper["default"].getActionCreatorSuccess(_actionTypes.NOTIFICATIONS_ACTIONS.SMART_LIST),
  view: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.NOTIFICATIONS_ACTIONS.VIEW),
  update: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.NOTIFICATIONS_ACTIONS.UPDATE)
};
exports.CustomerNotificationsActions = CustomerNotificationsActions;