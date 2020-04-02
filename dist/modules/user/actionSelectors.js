"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersStateSelectors = void 0;

var _actionTypes = require("./actionTypes");

var UsersStateSelectors = {
  getUser: function getUser(state) {
    return state.user[_actionTypes.USER_ACTION.USER];
  },
  getUserCity: function getUserCity(state) {
    return state.user[_actionTypes.USER_ACTION.USER_CITY];
  },
  getUserSettings: function getUserSettings(state) {
    return state.user[_actionTypes.USER_ACTION.USER_SETTINGS];
  },
  updateUserFields: function updateUserFields(state) {
    return state.user[_actionTypes.USER_ACTION.UPDATE_USER_FIELDS];
  },
  updateUserSettings: function updateUserSettings(state) {
    return state.user[_actionTypes.USER_ACTION.UPDATE_USER_SETTINGS];
  },
  updateMainUserInfo: function updateMainUserInfo(state) {
    return state.user[_actionTypes.USER_ACTION.UPDATE_MAIN_USER_INFO];
  }
};
exports.UsersStateSelectors = UsersStateSelectors;