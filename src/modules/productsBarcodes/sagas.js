/* eslint-disable max-len */
import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { PRODUCTS_BARCODES_ACTIONS } from 'modules/productsBarcodes/actionTypes'
import { ProductsBarcodesApi } from 'modules/productsBarcodes/api'

/**
 * Create product barcode
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productsBarcodes, type}>|CallEffect|PutEffect<{type}>>}
 */
function* create(action)
{
	yield SagasHelper.defaultCreate(action, ProductsBarcodesApi.create)
}

/**
 * Get products barcodes
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productsBarcodes, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, ProductsBarcodesApi.list)
}

/**
 * Update product barcode
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productsBarcodes, type}>|CallEffect|PutEffect<{type}>>}
 */
function* update(action)
{
	yield SagasHelper.defaultUpdate(action, ProductsBarcodesApi.update)
}

/**
 * Delete product barcode
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productsBarcodes, type}>|CallEffect|PutEffect<{type}>>}
 */
function* deleteModel(action)
{
	yield SagasHelper.defaultDelete(action, ProductsBarcodesApi.delete)
}

export default [
	takeLatest(PRODUCTS_BARCODES_ACTIONS.CREATE, create),
	takeLatest(PRODUCTS_BARCODES_ACTIONS.LIST, list),
	takeLatest(PRODUCTS_BARCODES_ACTIONS.UPDATE, update),
	takeLatest(PRODUCTS_BARCODES_ACTIONS.DELETE, deleteModel),
]
