import { PRODUCTS_REVIEWS_ACTIONS } from 'modules/productsReviews/actionTypes'

export const ProductsReviewsStateSelectors = {
	view:   (state) => state.productsReviews[PRODUCTS_REVIEWS_ACTIONS.VIEW],
	list:   (state) => state.productsReviews[PRODUCTS_REVIEWS_ACTIONS.LIST],
	create: (state) => state.productsReviews[PRODUCTS_REVIEWS_ACTIONS.CREATE],
	update: (state) => state.productsReviews[PRODUCTS_REVIEWS_ACTIONS.UPDATE],
}
