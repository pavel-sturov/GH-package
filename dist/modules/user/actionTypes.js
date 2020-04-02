"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USER_ACTION = void 0;
var USER_ACTION = {
  USER: 'USER',
  USER_CITY: 'USER_CITY',
  USER_SETTINGS: 'USER_SETTINGS',
  UPDATE_USER_FIELDS: 'UPDATE_USER_FIELDS',
  UPDATE_USER_SETTINGS: 'UPDATE_USER_SETTINGS',
  UPDATE_MAIN_USER_INFO: 'UPDATE_MAIN_USER_INFO',
  UPDATE_PUSH_TOKEN: 'UPDATE_USER_PUSH_TOKEN'
};
exports.USER_ACTION = USER_ACTION;