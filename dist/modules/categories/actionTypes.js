"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CATEGORY_ACTION = void 0;
var CATEGORY_ACTION = {
  CREATE: 'CATEGORIES_CREATE',
  VIEW: 'CATEGORIES_VIEW',
  LIST: 'CATEGORIES_LIST',
  UPDATE: 'CATEGORIES_UPDATE',
  DELETE: 'CATEGORIES_DELETE',
  FETCH_HIERARCHICAL: 'FETCH_HIERARCHICAL',
  HOME_CATEGORIES: 'HOME_CATEGORIES',
  FILTERS: 'CATEGORIES_FILTERS'
};
exports.CATEGORY_ACTION = CATEGORY_ACTION;