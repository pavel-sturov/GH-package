"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsReviewsActions = void 0;

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProductsReviewsActions = {
  view: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PRODUCTS_REVIEWS_ACTIONS.VIEW),
  list: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PRODUCTS_REVIEWS_ACTIONS.LIST),
  create: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PRODUCTS_REVIEWS_ACTIONS.CREATE),
  update: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PRODUCTS_REVIEWS_ACTIONS.UPDATE)
};
exports.ProductsReviewsActions = ProductsReviewsActions;