"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompaniesOffersActions = void 0;

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CompaniesOffersActions = {
  list: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.COMPANIES_OFFERS_ACTIONS.LIST),
  create: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.COMPANIES_OFFERS_ACTIONS.CREATE),
  view: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.COMPANIES_OFFERS_ACTIONS.VIEW),
  "delete": _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.COMPANIES_OFFERS_ACTIONS.DELETE),
  update: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.COMPANIES_OFFERS_ACTIONS.UPDATE)
};
exports.CompaniesOffersActions = CompaniesOffersActions;