import { CATEGORIES_ENTITIES_ACTIONS } from "./actionTypes";
export var CategoriesEntitiesStateSelectors = {
  list: function list(state) {
    return state.categoriesEntities[CATEGORIES_ENTITIES_ACTIONS.LIST];
  },
  create: function create(state) {
    return state.categoriesEntities[CATEGORIES_ENTITIES_ACTIONS.CREATE];
  },
  "delete": function _delete(state) {
    return state.categoriesEntities[CATEGORIES_ENTITIES_ACTIONS.DELETE];
  }
};