"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CountriesStateSelectors = void 0;

var _actionTypes = require("./actionTypes");

var CountriesStateSelectors = {
  list: function list(state) {
    return state.countries[_actionTypes.COUNTRY_ACTION.LIST];
  },
  view: function view(state) {
    return state.countries[_actionTypes.COUNTRY_ACTION.VIEW];
  },
  update: function update(state) {
    return state.countries[_actionTypes.COUNTRY_ACTION.UPDATE];
  },
  create: function create(state) {
    return state.countries[_actionTypes.COUNTRY_ACTION.CREATE];
  }
};
exports.CountriesStateSelectors = CountriesStateSelectors;