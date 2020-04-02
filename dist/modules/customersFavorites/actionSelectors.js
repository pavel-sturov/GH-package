import { FAVORITE_ACTION } from "./actionTypes";
export var CustomerFavoriteSelectors = {
  list: function list(state) {
    return state.customersFavorites[FAVORITE_ACTION.LIST];
  },
  create: function create(state) {
    return state.customersFavorites[FAVORITE_ACTION.CREATE];
  },
  view: function view(state) {
    return state.customersFavorites[FAVORITE_ACTION.VIEW];
  },
  "delete": function _delete(state) {
    return state.customersFavorites[FAVORITE_ACTION.DELETE];
  },
  deleteAll: function deleteAll(state) {
    return state.customersFavorites[FAVORITE_ACTION.DELETE_ALL];
  }
};