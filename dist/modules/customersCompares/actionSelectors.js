import { COMPARES_ACTION } from "./actionTypes";
export var CustomerComparesSelectors = {
  list: function list(state) {
    return state.customersCompares[COMPARES_ACTION.LIST];
  },
  create: function create(state) {
    return state.customersCompares[COMPARES_ACTION.CREATE];
  },
  view: function view(state) {
    return state.customersCompares[COMPARES_ACTION.VIEW];
  },
  "delete": function _delete(state) {
    return state.customersCompares[COMPARES_ACTION.DELETE];
  },
  deleteAll: function deleteAll(state) {
    return state.customersCompares[COMPARES_ACTION.DELETE_ALL];
  },
  hierarchical: function hierarchical(state) {
    return state.customersCompares[COMPARES_ACTION.HIERARCHICAL];
  },
  products: function products(state) {
    return state.customersCompares[COMPARES_ACTION.PRODUCTS];
  }
};