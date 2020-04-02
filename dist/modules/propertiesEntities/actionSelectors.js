"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PropertiesEntitiesStateSelectors = void 0;

var _actionTypes = require("./actionTypes");

var PropertiesEntitiesStateSelectors = {
  view: function view(state) {
    return state.properties.propertiesEntities[_actionTypes.PROPERTIES_ENTITIES_ACTIONS.VIEW];
  },
  list: function list(state) {
    return state.properties.propertiesEntities[_actionTypes.PROPERTIES_ENTITIES_ACTIONS.LIST];
  },
  create: function create(state) {
    return state.properties.propertiesEntities[_actionTypes.PROPERTIES_ENTITIES_ACTIONS.CREATE];
  },
  update: function update(state) {
    return state.properties.propertiesEntities[_actionTypes.PROPERTIES_ENTITIES_ACTIONS.UPDATE];
  },
  "delete": function _delete(state) {
    return state.properties.propertiesEntities[_actionTypes.PROPERTIES_ENTITIES_ACTIONS.DELETE];
  }
};
exports.PropertiesEntitiesStateSelectors = PropertiesEntitiesStateSelectors;