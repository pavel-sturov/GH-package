import { takeEvery, takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { ProductsBaseActions } from 'modules/productsBase/actionCreators'
import { ProductsBaseStateSelectors } from 'modules/productsBase/actionSelectors'
import { PRODUCTS_BASE_ACTIONS } from 'modules/productsBase/actionTypes'
import { ProductsBaseApi } from 'modules/productsBase/api'

/**
 * Get products base list
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productBase, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, ProductsBaseApi.list)
}

/**
 * Get product base
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productBase, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, ProductsBaseApi.view)
}

/**
 * Print epc tag
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productBase, type}>|CallEffect|PutEffect<{type}>>}
 */
function* printEpc(action)
{
	yield SagasHelper.defaultView(action, ProductsBaseApi.printEpc)
}

/**
 * Get products base differences tags zones
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productBase, type}>|CallEffect|PutEffect<{type}>>}
 */
function* differenceZoneTags(action)
{
	yield SagasHelper.defaultList(action, ProductsBaseApi.differenceZoneTags)
}

/**
 * Update all products base by filter
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productBase, type}>|CallEffect|PutEffect<{type}>>}
 */
function* updateAll(action)
{
	yield SagasHelper.defaultList(action, ProductsBaseApi.updateAll)
}

/**
 * Update products base
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productBase, type}>|CallEffect|PutEffect<{type}>>}
 */
function* update(action)
{
	yield SagasHelper.defaultUpdate(action, ProductsBaseApi.update)
}

/**
 * Delete product base model
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productBase, type}>|CallEffect|PutEffect<{type}>>}
 */
function* deleteModel(action)
{
	yield SagasHelper.defaultDelete(action, ProductsBaseApi.delete, null, function* (...params) {
		yield SagasHelper.afterDeleteModelFromList(...params, ProductsBaseStateSelectors.list, ProductsBaseActions.setList)
	})
}

/**
 * Move product base to defective
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productBase, type}>|CallEffect|PutEffect<{type}>>}
 */
function* setDefective(action)
{
	yield SagasHelper.defaultView(action, ProductsBaseApi.setDefective)
}

/**
 * Transfer product base
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productBase, type}>|CallEffect|PutEffect<{type}>>}
 */
function* transfer(action)
{
	yield SagasHelper.defaultView(action, ProductsBaseApi.transfer)
}

export default [
	takeLatest(PRODUCTS_BASE_ACTIONS.VIEW, view),
	takeLatest(PRODUCTS_BASE_ACTIONS.LIST, list),
	takeLatest(PRODUCTS_BASE_ACTIONS.PRINT_EPC, printEpc),
	takeLatest(PRODUCTS_BASE_ACTIONS.DIFFERENCE_ZONE_TAGS, differenceZoneTags),
	takeEvery(PRODUCTS_BASE_ACTIONS.UPDATE_ALL, updateAll),
	takeLatest(PRODUCTS_BASE_ACTIONS.UPDATE, update),
	takeLatest(PRODUCTS_BASE_ACTIONS.DELETE_EPC, deleteModel),
	takeLatest(PRODUCTS_BASE_ACTIONS.SET_DEFECTIVE, setDefective),
	takeLatest(PRODUCTS_BASE_ACTIONS.TRANSFER, transfer),
]
