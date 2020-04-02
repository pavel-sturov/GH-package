import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { beforeAddCustomerId } from 'helpers/Redux/SagasHelper'
import { PRODUCTS_REVIEWS_ACTIONS } from 'modules/productsReviews/actionTypes'
import { ProductsReviewsApi } from 'modules/productsReviews/api'

/**
 * Get products reviews
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, ProductsReviewsApi.list)
}

/**
 * Add product review
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* create(action)
{
	yield SagasHelper.defaultCreate(action, ProductsReviewsApi.create, beforeAddCustomerId)
}

/**
 * Update product review
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* update(action)
{
	yield SagasHelper.defaultUpdate(action, ProductsReviewsApi.update)
}

/**
 * Get product
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, ProductsReviewsApi.view)
}

export default [
	takeLatest(PRODUCTS_REVIEWS_ACTIONS.VIEW, view),
	takeLatest(PRODUCTS_REVIEWS_ACTIONS.LIST, list),
	takeLatest(PRODUCTS_REVIEWS_ACTIONS.CREATE, create),
	takeLatest(PRODUCTS_REVIEWS_ACTIONS.UPDATE, update),
]
