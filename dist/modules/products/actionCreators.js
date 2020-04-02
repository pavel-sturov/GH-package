"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsActions = void 0;

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProductsActions = {
  view: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PRODUCTS_ACTIONS.VIEW),
  viewBarcode: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PRODUCTS_ACTIONS.VIEW_BARCODE),
  list: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PRODUCTS_ACTIONS.LIST),
  setList: _RequestActionHelper["default"].getActionCreatorSuccess(_actionTypes.PRODUCTS_ACTIONS.LIST),
  search: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PRODUCTS_ACTIONS.SEARCH),
  setSearch: _RequestActionHelper["default"].getActionCreatorSuccess(_actionTypes.PRODUCTS_ACTIONS.SEARCH),
  create: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PRODUCTS_ACTIONS.CREATE),
  "delete": _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PRODUCTS_ACTIONS.DELETE),
  update: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PRODUCTS_ACTIONS.UPDATE),
  addToStock: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PRODUCTS_ACTIONS.ADD_TO_STOCK),
  setAddToStock: _RequestActionHelper["default"].getActionCreatorSuccess(_actionTypes.PRODUCTS_ACTIONS.ADD_TO_STOCK),
  batchUpload: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PRODUCTS_ACTIONS.BATCH_UPLOAD)
};
exports.ProductsActions = ProductsActions;