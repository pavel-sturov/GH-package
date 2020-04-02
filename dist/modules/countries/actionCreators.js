"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CountriesActions = void 0;

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CountriesActions = {
  list: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.COUNTRY_ACTION.LIST),
  view: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.COUNTRY_ACTION.VIEW),
  create: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.COUNTRY_ACTION.CREATE),
  update: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.COUNTRY_ACTION.UPDATE)
};
exports.CountriesActions = CountriesActions;