import { FAQ_CATEGORIES_ACTIONS } from "./actionTypes";
export var FaqCategoriesStateSelectors = {
  create: function create(state) {
    return state.faq.categories[FAQ_CATEGORIES_ACTIONS.CREATE];
  },
  view: function view(state) {
    return state.faq.categories[FAQ_CATEGORIES_ACTIONS.VIEW];
  },
  list: function list(state) {
    return state.faq.categories[FAQ_CATEGORIES_ACTIONS.LIST];
  },
  update: function update(state) {
    return state.faq.categories[FAQ_CATEGORIES_ACTIONS.UPDATE];
  },
  "delete": function _delete(state) {
    return state.faq.categories[FAQ_CATEGORIES_ACTIONS.DELETE];
  }
};