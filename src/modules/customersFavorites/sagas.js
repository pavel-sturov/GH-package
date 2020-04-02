import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { beforeAddCustomerId } from 'helpers/Redux/SagasHelper'
import { CustomerFavorite } from 'models/Customers/CustomerFavorite'
import { CustomerFavoriteActions } from 'modules/customersFavorites/actionCreators'
import { CustomerFavoriteSelectors } from 'modules/customersFavorites/actionSelectors'
import { FAVORITE_ACTION } from 'modules/customersFavorites/actionTypes'
import { CustomerFavoriteApi } from 'modules/customersFavorites/api'

/**
 * Get customer favorites
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, CustomerFavoriteApi.list)
}

/**
 * Add customer favorite
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* create(action)
{
	yield SagasHelper.defaultCreate(action, CustomerFavoriteApi.create, beforeAddCustomerId)
}

/**
 * View customer favorite
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, CustomerFavoriteApi.view)
}

/**
 * Delete customer favorite
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* deleteModel(action)
{
	yield SagasHelper.defaultDelete(action, CustomerFavoriteApi.delete, null, function* (...params) {
		yield SagasHelper.afterDeleteModelFromList(
			...params,
			CustomerFavoriteSelectors.list,
			CustomerFavoriteActions.setList,
			CustomerFavorite,
		)
	})
}

/**
 * Delete all favorites
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* deleteAll(action)
{
	yield SagasHelper.defaultDeleteAll(
		action,
		CustomerFavoriteApi.deleteAll,
		null,
		function* (...params) {
			yield SagasHelper.afterClearState(...params, CustomerFavoriteActions.list)
		},
	)
}

export default [
	takeLatest(FAVORITE_ACTION.LIST, list),
	takeLatest(FAVORITE_ACTION.CREATE, create),
	takeLatest(FAVORITE_ACTION.VIEW, view),
	takeLatest(FAVORITE_ACTION.DELETE, deleteModel),
	takeLatest(FAVORITE_ACTION.DELETE_ALL, deleteAll),
]
