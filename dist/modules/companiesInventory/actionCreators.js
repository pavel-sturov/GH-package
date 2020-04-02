"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompaniesInventoryActions = void 0;

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CompaniesInventoryActions = {
  view: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.COMPANIES_INVENTORY_ACTION.VIEW),
  setInventory: _RequestActionHelper["default"].getActionCreatorSuccess(_actionTypes.COMPANIES_INVENTORY_ACTION.VIEW),
  products: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.COMPANIES_INVENTORY_ACTION.PRODUCTS),
  setProducts: _RequestActionHelper["default"].getActionCreatorSuccess(_actionTypes.COMPANIES_INVENTORY_ACTION.PRODUCTS)
};
exports.CompaniesInventoryActions = CompaniesInventoryActions;