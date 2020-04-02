"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersActions = void 0;

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var UsersActions = {
  // Change only in store (for save city in backend, call setUserFields)
  setUserCity: _RequestActionHelper["default"].getActionCreatorSuccess(_actionTypes.USER_ACTION.USER_CITY),
  // Send request to backend
  getUserCity: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.USER_ACTION.USER_CITY),
  // Send request to backend
  updateUserFields: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.USER_ACTION.UPDATE_USER_FIELDS),
  // Send request to backend
  updateUserSettings: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.USER_ACTION.UPDATE_USER_SETTINGS),
  updateMainUserInfo: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.USER_ACTION.UPDATE_MAIN_USER_INFO),
  // Change only store
  setUser: _RequestActionHelper["default"].getActionCreatorSuccess(_actionTypes.USER_ACTION.USER),
  getUser: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.USER_ACTION.USER),
  // Settings
  setUserSettings: _RequestActionHelper["default"].getActionCreatorSuccess(_actionTypes.USER_ACTION.USER_SETTINGS),
  getUserSettings: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.USER_ACTION.USER_SETTINGS),
  updatePushToken: _RequestActionHelper["default"].getActionCreatorFetch(_actionTypes.USER_ACTION.UPDATE_PUSH_TOKEN)
};
exports.UsersActions = UsersActions;