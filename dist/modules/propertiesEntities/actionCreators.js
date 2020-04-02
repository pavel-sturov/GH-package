"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PropertiesEntitiesActions = void 0;

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PropertiesEntitiesActions = {
  view: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PROPERTIES_ENTITIES_ACTIONS.VIEW),
  list: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PROPERTIES_ENTITIES_ACTIONS.LIST),
  create: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PROPERTIES_ENTITIES_ACTIONS.CREATE),
  update: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PROPERTIES_ENTITIES_ACTIONS.UPDATE),
  "delete": _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.PROPERTIES_ENTITIES_ACTIONS.DELETE)
};
exports.PropertiesEntitiesActions = PropertiesEntitiesActions;