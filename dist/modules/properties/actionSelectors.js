"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PropertiesStateSelectors = void 0;

var _actionTypes = require("./actionTypes");

var PropertiesStateSelectors = {
  view: function view(state) {
    return state.properties.properties[_actionTypes.PROPERTIES_ACTIONS.VIEW];
  },
  list: function list(state) {
    return state.properties.properties[_actionTypes.PROPERTIES_ACTIONS.LIST];
  },
  create: function create(state) {
    return state.properties.properties[_actionTypes.PROPERTIES_ACTIONS.CREATE];
  },
  update: function update(state) {
    return state.properties.properties[_actionTypes.PROPERTIES_ACTIONS.UPDATE];
  },
  "delete": function _delete(state) {
    return state.properties.properties[_actionTypes.PROPERTIES_ACTIONS.DELETE];
  }
};
exports.PropertiesStateSelectors = PropertiesStateSelectors;