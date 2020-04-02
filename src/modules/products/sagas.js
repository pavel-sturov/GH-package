import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { PRODUCTS_ACTIONS } from 'modules/products/actionTypes'
import { ProductsApi } from 'modules/products/api'

/**
 * Create product
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{products, type}>|CallEffect|PutEffect<{type}>>}
 */
function* create(action)
{
	yield SagasHelper.defaultCreate(action, ProductsApi.create)
}

/**
 * Get product
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{products, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, ProductsApi.view)
}

/**
 * Get product by barcode
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{products, type}>|CallEffect|PutEffect<{type}>>}
 */
function* viewBarcode(action)
{
	yield SagasHelper.defaultView(action, ProductsApi.viewBarcode)
}

/**
 * Get products
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{products, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, ProductsApi.list)
}

/**
 * Update product
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{products, type}>|CallEffect|PutEffect<{type}>>}
 */
function* update(action)
{
	yield SagasHelper.defaultUpdate(action, ProductsApi.update)
}

/**
 * Delete product
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{products, type}>|CallEffect|PutEffect<{type}>>}
 */
function* deleteModel(action)
{
	yield SagasHelper.defaultDelete(action, ProductsApi.deleteModel)
}

/**
 * Add product to stock
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{products, type}>|CallEffect|PutEffect<{type}>>}
 */
function* addToStock(action)
{
	yield SagasHelper.defaultCreate(action, ProductsApi.addToStock)
}

/**
 * Upload products attachments
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{products, type}>|CallEffect|PutEffect<{type}>>}
 */
function* batchUpload(action)
{
	yield SagasHelper.defaultCreate(action, ProductsApi.batchUpload)
}

export default [
	takeLatest(PRODUCTS_ACTIONS.CREATE, create),
	takeLatest(PRODUCTS_ACTIONS.VIEW, view),
	takeLatest(PRODUCTS_ACTIONS.VIEW_BARCODE, viewBarcode),
	takeLatest(PRODUCTS_ACTIONS.LIST, list),
	takeLatest(PRODUCTS_ACTIONS.SEARCH, list),
	takeLatest(PRODUCTS_ACTIONS.UPDATE, update),
	takeLatest(PRODUCTS_ACTIONS.DELETE, deleteModel),
	takeLatest(PRODUCTS_ACTIONS.ADD_TO_STOCK, addToStock),
	takeLatest(PRODUCTS_ACTIONS.BATCH_UPLOAD, batchUpload),
]
