"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PropertiesTypesStateSelectors = void 0;

var _actionTypes = require("./actionTypes");

var PropertiesTypesStateSelectors = {
  view: function view(state) {
    return state.properties.propertiesTypes[_actionTypes.PROPERTIES_TYPES_ACTIONS.VIEW];
  },
  list: function list(state) {
    return state.properties.propertiesTypes[_actionTypes.PROPERTIES_TYPES_ACTIONS.LIST];
  },
  create: function create(state) {
    return state.properties.propertiesTypes[_actionTypes.PROPERTIES_TYPES_ACTIONS.CREATE];
  },
  update: function update(state) {
    return state.properties.propertiesTypes[_actionTypes.PROPERTIES_TYPES_ACTIONS.UPDATE];
  },
  "delete": function _delete(state) {
    return state.properties.propertiesTypes[_actionTypes.PROPERTIES_TYPES_ACTIONS.DELETE];
  }
};
exports.PropertiesTypesStateSelectors = PropertiesTypesStateSelectors;