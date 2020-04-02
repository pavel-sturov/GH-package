"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersActions = void 0;

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var OrdersActions = {
  list: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.ORDERS_ACTION.LIST),
  view: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.ORDERS_ACTION.VIEW),
  pay: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.ORDERS_ACTION.PAY),
  finishByProduct: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.ORDERS_ACTION.FINISH_BY_PRODUCT),
  cancelByProduct: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.ORDERS_ACTION.CANCEL_BY_PRODUCT)
};
exports.OrdersActions = OrdersActions;