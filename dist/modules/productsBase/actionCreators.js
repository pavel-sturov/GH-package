"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsBaseActions = void 0;

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProductsBaseActions = {
  getView: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PRODUCTS_BASE_ACTIONS.VIEW),
  getList: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PRODUCTS_BASE_ACTIONS.LIST),
  setList: _RequestActionHelper["default"].getActionCreatorSuccess(_actionTypes.PRODUCTS_BASE_ACTIONS.LIST),
  printEpc: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PRODUCTS_BASE_ACTIONS.PRINT_EPC),
  deleteEpc: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PRODUCTS_BASE_ACTIONS.DELETE_EPC),
  differenceZoneTags: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PRODUCTS_BASE_ACTIONS.DIFFERENCE_ZONE_TAGS),
  updateAll: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PRODUCTS_BASE_ACTIONS.UPDATE_ALL),
  update: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PRODUCTS_BASE_ACTIONS.UPDATE),
  setDefective: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PRODUCTS_BASE_ACTIONS.SET_DEFECTIVE),
  transfer: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PRODUCTS_BASE_ACTIONS.TRANSFER)
};
exports.ProductsBaseActions = ProductsBaseActions;