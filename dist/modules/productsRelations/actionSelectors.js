import { PRODUCTS_RELATIONS_ACTIONS } from "./actionTypes";
export var ProductsRelationsStateSelectors = {
  view: function view(state) {
    return state.productsRelations[PRODUCTS_RELATIONS_ACTIONS.VIEW];
  },
  list: function list(state) {
    return state.productsRelations[PRODUCTS_RELATIONS_ACTIONS.LIST];
  },
  create: function create(state) {
    return state.productsRelations[PRODUCTS_RELATIONS_ACTIONS.CREATE];
  },
  "delete": function _delete(state) {
    return state.productsRelations[PRODUCTS_RELATIONS_ACTIONS.DELETE];
  }
};