import { PRODUCTS_ACTIONS } from "./actionTypes";
export var ProductsStateSelectors = {
  view: function view(state) {
    return state.products[PRODUCTS_ACTIONS.VIEW];
  },
  viewBarcode: function viewBarcode(state) {
    return state.products[PRODUCTS_ACTIONS.VIEW_BARCODE];
  },
  list: function list(state) {
    return state.products[PRODUCTS_ACTIONS.LIST];
  },
  search: function search(state) {
    return state.products[PRODUCTS_ACTIONS.SEARCH];
  },
  create: function create(state) {
    return state.products[PRODUCTS_ACTIONS.CREATE];
  },
  "delete": function _delete(state) {
    return state.products[PRODUCTS_ACTIONS.DELETE];
  },
  update: function update(state) {
    return state.products[PRODUCTS_ACTIONS.UPDATE];
  },
  addToStock: function addToStock(state) {
    return state.products[PRODUCTS_ACTIONS.ADD_TO_STOCK];
  },
  batchUpload: function batchUpload(state) {
    return state.products[PRODUCTS_ACTIONS.BATCH_UPLOAD];
  }
};