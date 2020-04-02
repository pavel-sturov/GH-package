"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthActions = void 0;

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AuthActions = {
  signIn: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.AUTH_ACTION.SIGN_IN),
  setAuth: _RequestActionHelper["default"].getActionCreatorSuccess(_actionTypes.AUTH_ACTION.SIGN_IN),
  logOut: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.AUTH_ACTION.LOG_OUT),
  renewToken: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.AUTH_ACTION.RENEW_TOKEN),
  renewTokenError: _RequestActionHelper["default"].getActionCreatorError(_actionTypes.AUTH_ACTION.RENEW_TOKEN)
};
exports.AuthActions = AuthActions;