"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FAVORITE_ACTION = void 0;
var FAVORITE_ACTION = {
  LIST: 'LIST_FAVORITES',
  CREATE: 'CREATE_FAVORITES',
  DELETE: 'DELETE_FAVORITES',
  VIEW: 'VIEW_FAVORITES',
  DELETE_ALL: 'DELETE_ALL_FAVORITES'
};
exports.FAVORITE_ACTION = FAVORITE_ACTION;