import { CATEGORIES_RELATIONS_ACTIONS } from "./actionTypes";
export var CategoriesRelationsStateSelectors = {
  list: function list(state) {
    return state.categoriesRelations[CATEGORIES_RELATIONS_ACTIONS.LIST];
  },
  create: function create(state) {
    return state.categoriesRelations[CATEGORIES_RELATIONS_ACTIONS.CREATE];
  },
  "delete": function _delete(state) {
    return state.categoriesRelations[CATEGORIES_RELATIONS_ACTIONS.DELETE];
  }
};