import { PRODUCTS_REVIEWS_ACTIONS } from "./actionTypes";
export var ProductsReviewsStateSelectors = {
  view: function view(state) {
    return state.productsReviews[PRODUCTS_REVIEWS_ACTIONS.VIEW];
  },
  list: function list(state) {
    return state.productsReviews[PRODUCTS_REVIEWS_ACTIONS.LIST];
  },
  create: function create(state) {
    return state.productsReviews[PRODUCTS_REVIEWS_ACTIONS.CREATE];
  },
  update: function update(state) {
    return state.productsReviews[PRODUCTS_REVIEWS_ACTIONS.UPDATE];
  }
};