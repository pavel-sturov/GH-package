"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomerAddressesActions = void 0;

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CustomerAddressesActions = {
  list: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.CUSTOMER_ADDRESSES_ACTION.LIST),
  create: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.CUSTOMER_ADDRESSES_ACTION.CREATE),
  view: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.CUSTOMER_ADDRESSES_ACTION.VIEW),
  "delete": _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.CUSTOMER_ADDRESSES_ACTION.DELETE),
  update: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.CUSTOMER_ADDRESSES_ACTION.UPDATE)
};
exports.CustomerAddressesActions = CustomerAddressesActions;