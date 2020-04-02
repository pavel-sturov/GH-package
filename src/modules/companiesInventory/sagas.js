/* eslint-disable max-len */
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { takeLatest } from 'redux-saga/effects'
import { COMPANIES_INVENTORY_ACTION } from 'modules/companiesInventory/actionTypes'
import { CompaniesInventoryApi } from 'modules/companiesInventory/api'

/**
 * Inventory info
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{companiesInventory, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, CompaniesInventoryApi.view)
}

/**
 * Get inventory products
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{companiesInventory, type}>|CallEffect|PutEffect<{type}>>}
 */
function* products(action)
{
	yield SagasHelper.defaultList(action, CompaniesInventoryApi.products)
}

export default [
	takeLatest(COMPANIES_INVENTORY_ACTION.VIEW, view),
	takeLatest(COMPANIES_INVENTORY_ACTION.PRODUCTS, products),
]
