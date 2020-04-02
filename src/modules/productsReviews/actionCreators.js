import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { PRODUCTS_REVIEWS_ACTIONS } from 'modules/productsReviews/actionTypes'

export const ProductsReviewsActions = {
	view:   RequestActionHelper.getActionCreatorFetch(PRODUCTS_REVIEWS_ACTIONS.VIEW),
	list:   RequestActionHelper.getActionCreatorFetch(PRODUCTS_REVIEWS_ACTIONS.LIST),
	create: RequestActionHelper.getActionCreatorFetch(PRODUCTS_REVIEWS_ACTIONS.CREATE),
	update: RequestActionHelper.getActionCreatorFetch(PRODUCTS_REVIEWS_ACTIONS.UPDATE),
}
