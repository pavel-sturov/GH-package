import { PRODUCTS_BARCODES_ACTIONS } from "./actionTypes";
export var ProductsBarcodesStateSelectors = {
  list: function list(state) {
    return state.productsBarcodes[PRODUCTS_BARCODES_ACTIONS.LIST];
  },
  create: function create(state) {
    return state.productsBarcodes[PRODUCTS_BARCODES_ACTIONS.CREATE];
  },
  "delete": function _delete(state) {
    return state.productsBarcodes[PRODUCTS_BARCODES_ACTIONS.DELETE];
  },
  update: function update(state) {
    return state.productsBarcodes[PRODUCTS_BARCODES_ACTIONS.UPDATE];
  }
};