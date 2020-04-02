"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentActions = void 0;

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PaymentActions = {
  list: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PAYMENT_ACTION.LIST),
  setList: _RequestActionHelper["default"].getActionCreatorSuccess(_actionTypes.PAYMENT_ACTION.LIST),
  create: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PAYMENT_ACTION.CREATE),
  postSecure: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PAYMENT_ACTION.POST_SECURE),
  createWithRedirect: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PAYMENT_ACTION.CREATE_WITH_REDIRECT),
  setMain: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PAYMENT_ACTION.SET_MAIN),
  "delete": _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PAYMENT_ACTION.DELETE)
};
exports.PaymentActions = PaymentActions;