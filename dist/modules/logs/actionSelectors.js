"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogsStateSelectors = void 0;

var _actionTypes = require("./actionTypes");

var LogsStateSelectors = {
  list: function list(state) {
    return state.logs[_actionTypes.LOGS_ACTION.LIST];
  },
  view: function view(state) {
    return state.logs[_actionTypes.LOGS_ACTION.VIEW];
  },
  "delete": function _delete(state) {
    return state.logs[_actionTypes.LOGS_ACTION.DELETE];
  },
  deleteAll: function deleteAll(state) {
    return state.logs[_actionTypes.LOGS_ACTION.DELETE_ALL];
  }
};
exports.LogsStateSelectors = LogsStateSelectors;