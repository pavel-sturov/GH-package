"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportsStateSelectors = void 0;

var _actionTypes = require("./actionTypes");

var ReportsStateSelectors = {
  view: function view(state) {
    return state.reports[_actionTypes.REPORTS_ACTIONS.VIEW];
  },
  generate: function generate(state) {
    return state.reports[_actionTypes.REPORTS_ACTIONS.GENERATE];
  }
};
exports.ReportsStateSelectors = ReportsStateSelectors;