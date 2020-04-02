"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsAttachmentsActions = void 0;

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProductsAttachmentsActions = {
  view: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PRODUCTS_ATTACHMENTS_ACTIONS.VIEW),
  list: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PRODUCTS_ATTACHMENTS_ACTIONS.LIST),
  create: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PRODUCTS_ATTACHMENTS_ACTIONS.CREATE),
  "delete": _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PRODUCTS_ATTACHMENTS_ACTIONS.DELETE),
  update: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PRODUCTS_ATTACHMENTS_ACTIONS.UPDATE)
};
exports.ProductsAttachmentsActions = ProductsAttachmentsActions;