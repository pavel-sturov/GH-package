import { PRODUCTS_ATTACHMENTS_ACTIONS } from "./actionTypes";
export var ProductsAttachmentsStateSelectors = {
  view: function view(state) {
    return state.productsAttachments[PRODUCTS_ATTACHMENTS_ACTIONS.VIEW];
  },
  list: function list(state) {
    return state.productsAttachments[PRODUCTS_ATTACHMENTS_ACTIONS.LIST];
  },
  create: function create(state) {
    return state.productsAttachments[PRODUCTS_ATTACHMENTS_ACTIONS.CREATE];
  },
  "delete": function _delete(state) {
    return state.productsAttachments[PRODUCTS_ATTACHMENTS_ACTIONS.DELETE];
  },
  update: function update(state) {
    return state.productsAttachments[PRODUCTS_ATTACHMENTS_ACTIONS.UPDATE];
  }
};