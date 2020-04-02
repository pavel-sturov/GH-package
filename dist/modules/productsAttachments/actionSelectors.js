"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsAttachmentsStateSelectors = void 0;

var _actionTypes = require("./actionTypes");

var ProductsAttachmentsStateSelectors = {
  view: function view(state) {
    return state.productsAttachments[_actionTypes.PRODUCTS_ATTACHMENTS_ACTIONS.VIEW];
  },
  list: function list(state) {
    return state.productsAttachments[_actionTypes.PRODUCTS_ATTACHMENTS_ACTIONS.LIST];
  },
  create: function create(state) {
    return state.productsAttachments[_actionTypes.PRODUCTS_ATTACHMENTS_ACTIONS.CREATE];
  },
  "delete": function _delete(state) {
    return state.productsAttachments[_actionTypes.PRODUCTS_ATTACHMENTS_ACTIONS.DELETE];
  },
  update: function update(state) {
    return state.productsAttachments[_actionTypes.PRODUCTS_ATTACHMENTS_ACTIONS.UPDATE];
  }
};
exports.ProductsAttachmentsStateSelectors = ProductsAttachmentsStateSelectors;