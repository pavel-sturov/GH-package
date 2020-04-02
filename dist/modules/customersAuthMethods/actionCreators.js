"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomerAuthMethodActions = void 0;

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CustomerAuthMethodActions = {
  list: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.CUSTOMER_AUTH_METHOD_ACTIONS.LIST),
  view: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.CUSTOMER_AUTH_METHOD_ACTIONS.VIEW),
  update: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.CUSTOMER_AUTH_METHOD_ACTIONS.UPDATE)
};
exports.CustomerAuthMethodActions = CustomerAuthMethodActions;