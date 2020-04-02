import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { beforeAddCustomerId } from 'helpers/Redux/SagasHelper'
import { CustomerCompare } from 'models/Customers'
import { CustomerComparesActions } from 'modules/customersCompares/actionCreators'
import { CustomerComparesSelectors } from 'modules/customersCompares/actionSelectors'
import { COMPARES_ACTION } from 'modules/customersCompares/actionTypes'
import { CustomerCompareApi } from 'modules/customersCompares/api'

/**
 * Get customer favorites
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, CustomerCompareApi.list)
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
	yield SagasHelper.defaultCreate(action, CustomerCompareApi.create, beforeAddCustomerId)
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
	yield SagasHelper.defaultView(action, CustomerCompareApi.view)
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
	yield SagasHelper.defaultDelete(action, CustomerCompareApi.delete, null, function* (...params) {
		yield SagasHelper.afterDeleteModelFromList(
			...params,
			CustomerComparesSelectors.list,
			CustomerComparesActions.setList,
			CustomerCompare,
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
		CustomerCompareApi.deleteAll,
		null,
		function* (...params) {
			yield SagasHelper.afterClearState(...params, CustomerComparesActions.list)
		},
	)
}

/**
 * Get hierarchical compares
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* hiearchical(action)
{
	yield SagasHelper.defaultCustom(action, CustomerCompareApi.hierarchical)
}

/**
 * Get category products compares
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* products(action)
{
	yield SagasHelper.defaultCustom(action, CustomerCompareApi.products)
}

export default [
	takeLatest(COMPARES_ACTION.LIST, list),
	takeLatest(COMPARES_ACTION.CREATE, create),
	takeLatest(COMPARES_ACTION.VIEW, view),
	takeLatest(COMPARES_ACTION.DELETE, deleteModel),
	takeLatest(COMPARES_ACTION.DELETE_ALL, deleteAll),
	takeLatest(COMPARES_ACTION.HIERARCHICAL, hiearchical),
	takeLatest(COMPARES_ACTION.PRODUCTS, products),
]
