import { PROPERTIES_ACTIONS } from "./actionTypes";
export var PropertiesStateSelectors = {
  view: function view(state) {
    return state.properties.properties[PROPERTIES_ACTIONS.VIEW];
  },
  list: function list(state) {
    return state.properties.properties[PROPERTIES_ACTIONS.LIST];
  },
  create: function create(state) {
    return state.properties.properties[PROPERTIES_ACTIONS.CREATE];
  },
  update: function update(state) {
    return state.properties.properties[PROPERTIES_ACTIONS.UPDATE];
  },
  "delete": function _delete(state) {
    return state.properties.properties[PROPERTIES_ACTIONS.DELETE];
  }
};