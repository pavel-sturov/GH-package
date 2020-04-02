/* eslint-disable max-len */
import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { PRODUCTS_RELATIONS_ACTIONS } from 'modules/productsRelations/actionTypes'
import { ProductsRelationsApi } from 'modules/productsRelations/api'

/**
 * Create product relation
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productsRelations, type}>|CallEffect|PutEffect<{type}>>}
 */
function* create(action)
{
	yield SagasHelper.defaultCreate(action, ProductsRelationsApi.create)
}

/**
 * Get product relation
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productsRelations, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, ProductsRelationsApi.view)
}

/**
 * Get products relations
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productsRelations, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, ProductsRelationsApi.list)
}

/**
 * Delete product relation
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productsRelations, type}>|CallEffect|PutEffect<{type}>>}
 */
function* deleteModel(action)
{
	yield SagasHelper.defaultDelete(action, ProductsRelationsApi.delete)
}

export default [
	takeLatest(PRODUCTS_RELATIONS_ACTIONS.CREATE, create),
	takeLatest(PRODUCTS_RELATIONS_ACTIONS.VIEW, view),
	takeLatest(PRODUCTS_RELATIONS_ACTIONS.LIST, list),
	takeLatest(PRODUCTS_RELATIONS_ACTIONS.DELETE, deleteModel),
]
