"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomerComparesActions = void 0;

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CustomerComparesActions = {
  list: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.COMPARES_ACTION.LIST),
  setList: _RequestActionHelper["default"].getActionCreatorSuccess(_actionTypes.COMPARES_ACTION.LIST),
  create: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.COMPARES_ACTION.CREATE),
  view: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.COMPARES_ACTION.VIEW),
  "delete": _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.COMPARES_ACTION.DELETE),
  deleteAll: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.COMPARES_ACTION.DELETE_ALL),
  hierarchical: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.COMPARES_ACTION.HIERARCHICAL),
  products: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.COMPARES_ACTION.PRODUCTS)
};
exports.CustomerComparesActions = CustomerComparesActions;