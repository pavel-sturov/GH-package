"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagZoneActions = void 0;

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TagZoneActions = {
  list: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.TAG_ZONE_ACTIONS.LIST),
  create: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.TAG_ZONE_ACTIONS.CREATE),
  view: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.TAG_ZONE_ACTIONS.VIEW),
  "delete": _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.TAG_ZONE_ACTIONS.DELETE),
  update: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.TAG_ZONE_ACTIONS.UPDATE),
  clearZones: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.TAG_ZONE_ACTIONS.CLEAR_ZONES)
};
exports.TagZoneActions = TagZoneActions;