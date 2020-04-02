"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FaqCategoriesActions = void 0;

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FaqCategoriesActions = {
  create: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.FAQ_CATEGORIES_ACTIONS.CREATE),
  view: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.FAQ_CATEGORIES_ACTIONS.VIEW),
  list: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.FAQ_CATEGORIES_ACTIONS.LIST),
  update: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.FAQ_CATEGORIES_ACTIONS.UPDATE),
  "delete": _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.FAQ_CATEGORIES_ACTIONS.DELETE)
};
exports.FaqCategoriesActions = FaqCategoriesActions;