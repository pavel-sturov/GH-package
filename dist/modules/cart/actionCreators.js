"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartActions = void 0;

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CartActions = {
  getList: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.CART_ACTION.LIST),
  setList: _RequestActionHelper["default"].getActionCreatorSuccess(_actionTypes.CART_ACTION.LIST),
  create: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.CART_ACTION.CREATE),
  update: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.CART_ACTION.UPDATE),
  "delete": _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.CART_ACTION.DELETE),
  deleteAll: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.CART_ACTION.DELETE_ALL),
  checkout: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.CART_ACTION.CHECKOUT),
  checkoutTerminal: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.CART_ACTION.CHECKOUT_TERMINAL),
  createOrder: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.CART_ACTION.CREATE_ORDER),
  createOrderTerminal: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.CART_ACTION.CREATE_ORDER_TERRMINAL),
  startSessionTerminal: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.CART_ACTION.START_SESSION_TERMINAL)
};
exports.CartActions = CartActions;