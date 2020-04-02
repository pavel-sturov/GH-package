"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsReviewsStateSelectors = void 0;

var _actionTypes = require("./actionTypes");

var ProductsReviewsStateSelectors = {
  view: function view(state) {
    return state.productsReviews[_actionTypes.PRODUCTS_REVIEWS_ACTIONS.VIEW];
  },
  list: function list(state) {
    return state.productsReviews[_actionTypes.PRODUCTS_REVIEWS_ACTIONS.LIST];
  },
  create: function create(state) {
    return state.productsReviews[_actionTypes.PRODUCTS_REVIEWS_ACTIONS.CREATE];
  },
  update: function update(state) {
    return state.productsReviews[_actionTypes.PRODUCTS_REVIEWS_ACTIONS.UPDATE];
  }
};
exports.ProductsReviewsStateSelectors = ProductsReviewsStateSelectors;