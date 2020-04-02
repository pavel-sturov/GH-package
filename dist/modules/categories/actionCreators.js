"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoriesActions = void 0;

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CategoriesActions = {
  create: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.CATEGORY_ACTION.CREATE),
  view: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.CATEGORY_ACTION.VIEW),
  list: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.CATEGORY_ACTION.LIST),
  update: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.CATEGORY_ACTION.UPDATE),
  "delete": _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.CATEGORY_ACTION.DELETE),
  getHierarchical: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.CATEGORY_ACTION.FETCH_HIERARCHICAL),
  getHomeCategories: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.CATEGORY_ACTION.HOME_CATEGORIES),
  filters: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.CATEGORY_ACTION.FILTERS)
};
exports.CategoriesActions = CategoriesActions;