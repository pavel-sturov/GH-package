"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomerFavoriteActions = void 0;

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CustomerFavoriteActions = {
  list: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.FAVORITE_ACTION.LIST),
  create: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.FAVORITE_ACTION.CREATE),
  view: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.FAVORITE_ACTION.VIEW),
  "delete": _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.FAVORITE_ACTION.DELETE),
  deleteAll: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.FAVORITE_ACTION.DELETE_ALL),
  setList: _RequestActionHelper["default"].getActionCreatorSuccess(_actionTypes.FAVORITE_ACTION.LIST)
};
exports.CustomerFavoriteActions = CustomerFavoriteActions;