import { CATEGORY_ACTION } from "./actionTypes";
export var CategoriesStateSelectors = {
  create: function create(state) {
    return state.categories[CATEGORY_ACTION.CREATE];
  },
  view: function view(state) {
    return state.categories[CATEGORY_ACTION.VIEW];
  },
  list: function list(state) {
    return state.categories[CATEGORY_ACTION.LIST];
  },
  update: function update(state) {
    return state.categories[CATEGORY_ACTION.UPDATE];
  },
  "delete": function _delete(state) {
    return state.categories[CATEGORY_ACTION.DELETE];
  },
  getHierarchical: function getHierarchical(state) {
    return state.categories[CATEGORY_ACTION.FETCH_HIERARCHICAL];
  },
  getHomeCategories: function getHomeCategories(state) {
    return state.categories[CATEGORY_ACTION.HOME_CATEGORIES];
  },
  filters: function filters(state) {
    return state.categories[CATEGORY_ACTION.FILTERS];
  }
};