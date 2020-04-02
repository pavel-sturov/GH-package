import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { PRODUCTS_ATTACHMENTS_ACTIONS } from 'modules/productsAttachments/actionTypes'
import { ProductsAttachmentsApi } from 'modules/productsAttachments/api'

/**
 * Create products attachments
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{products, type}>|CallEffect|PutEffect<{type}>>}
 */
function* create(action)
{
	yield SagasHelper.defaultCreate(action, ProductsAttachmentsApi.create)
}

/**
 * Get products attachments
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{products, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, ProductsAttachmentsApi.view)
}

/**
 * Get products attachments
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{products, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, ProductsAttachmentsApi.list)
}

/**
 * Update products attachments
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{products, type}>|CallEffect|PutEffect<{type}>>}
 */
function* update(action)
{
	yield SagasHelper.defaultUpdate(action, ProductsAttachmentsApi.update)
}

/**
 * Delete products attachments
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{products, type}>|CallEffect|PutEffect<{type}>>}
 */
function* deleteModel(action)
{
	yield SagasHelper.defaultDelete(action, ProductsAttachmentsApi.deleteModel)
}

export default [
	takeLatest(PRODUCTS_ATTACHMENTS_ACTIONS.CREATE, create),
	takeLatest(PRODUCTS_ATTACHMENTS_ACTIONS.VIEW, view),
	takeLatest(PRODUCTS_ATTACHMENTS_ACTIONS.LIST, list),
	takeLatest(PRODUCTS_ATTACHMENTS_ACTIONS.UPDATE, update),
	takeLatest(PRODUCTS_ATTACHMENTS_ACTIONS.DELETE, deleteModel),
]
