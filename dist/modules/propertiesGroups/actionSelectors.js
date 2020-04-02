"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PropertiesGroupsStateSelectors = void 0;

var _actionTypes = require("./actionTypes");

var PropertiesGroupsStateSelectors = {
  view: function view(state) {
    return state.properties.propertiesGroups[_actionTypes.PROPERTIES_GROUPS_ACTIONS.VIEW];
  },
  list: function list(state) {
    return state.properties.propertiesGroups[_actionTypes.PROPERTIES_GROUPS_ACTIONS.LIST];
  },
  create: function create(state) {
    return state.properties.propertiesGroups[_actionTypes.PROPERTIES_GROUPS_ACTIONS.CREATE];
  },
  update: function update(state) {
    return state.properties.propertiesGroups[_actionTypes.PROPERTIES_GROUPS_ACTIONS.UPDATE];
  },
  "delete": function _delete(state) {
    return state.properties.propertiesGroups[_actionTypes.PROPERTIES_GROUPS_ACTIONS.DELETE];
  }
};
exports.PropertiesGroupsStateSelectors = PropertiesGroupsStateSelectors;