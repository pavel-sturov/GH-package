import { PROPERTIES_ENTITIES_ACTIONS } from "./actionTypes";
export var PropertiesEntitiesStateSelectors = {
  view: function view(state) {
    return state.properties.propertiesEntities[PROPERTIES_ENTITIES_ACTIONS.VIEW];
  },
  list: function list(state) {
    return state.properties.propertiesEntities[PROPERTIES_ENTITIES_ACTIONS.LIST];
  },
  create: function create(state) {
    return state.properties.propertiesEntities[PROPERTIES_ENTITIES_ACTIONS.CREATE];
  },
  update: function update(state) {
    return state.properties.propertiesEntities[PROPERTIES_ENTITIES_ACTIONS.UPDATE];
  },
  "delete": function _delete(state) {
    return state.properties.propertiesEntities[PROPERTIES_ENTITIES_ACTIONS.DELETE];
  }
};