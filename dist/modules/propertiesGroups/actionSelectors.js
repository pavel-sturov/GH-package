import { PROPERTIES_GROUPS_ACTIONS } from "./actionTypes";
export var PropertiesGroupsStateSelectors = {
  view: function view(state) {
    return state.properties.propertiesGroups[PROPERTIES_GROUPS_ACTIONS.VIEW];
  },
  list: function list(state) {
    return state.properties.propertiesGroups[PROPERTIES_GROUPS_ACTIONS.LIST];
  },
  create: function create(state) {
    return state.properties.propertiesGroups[PROPERTIES_GROUPS_ACTIONS.CREATE];
  },
  update: function update(state) {
    return state.properties.propertiesGroups[PROPERTIES_GROUPS_ACTIONS.UPDATE];
  },
  "delete": function _delete(state) {
    return state.properties.propertiesGroups[PROPERTIES_GROUPS_ACTIONS.DELETE];
  }
};