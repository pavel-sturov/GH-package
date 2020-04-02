"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CitiesStateSelectors = void 0;

var _actionTypes = require("./actionTypes");

var CitiesStateSelectors = {
  list: function list(state) {
    return state.cities[_actionTypes.CITY_ACTION.LIST];
  },
  view: function view(state) {
    return state.cities[_actionTypes.CITY_ACTION.VIEW];
  },
  create: function create(state) {
    return state.cities[_actionTypes.CITY_ACTION.CREATE];
  },
  update: function update(state) {
    return state.cities[_actionTypes.CITY_ACTION.UPDATE];
  }
};
exports.CitiesStateSelectors = CitiesStateSelectors;