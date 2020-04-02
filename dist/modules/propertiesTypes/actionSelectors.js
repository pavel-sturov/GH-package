import { PROPERTIES_TYPES_ACTIONS } from "./actionTypes";
export var PropertiesTypesStateSelectors = {
  view: function view(state) {
    return state.properties.propertiesTypes[PROPERTIES_TYPES_ACTIONS.VIEW];
  },
  list: function list(state) {
    return state.properties.propertiesTypes[PROPERTIES_TYPES_ACTIONS.LIST];
  },
  create: function create(state) {
    return state.properties.propertiesTypes[PROPERTIES_TYPES_ACTIONS.CREATE];
  },
  update: function update(state) {
    return state.properties.propertiesTypes[PROPERTIES_TYPES_ACTIONS.UPDATE];
  },
  "delete": function _delete(state) {
    return state.properties.propertiesTypes[PROPERTIES_TYPES_ACTIONS.DELETE];
  }
};