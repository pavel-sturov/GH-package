import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { beforeAddCustomerId } from 'helpers/Redux/SagasHelper'
import { CUSTOMER_ADDRESSES_ACTION } from 'modules/customersAddresses/actionTypes'
import { CustomerAddressesApi } from 'modules/customersAddresses/api'

/**
 * Get customer addresses
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, CustomerAddressesApi.list)
}

/**
 * Add customer address
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* create(action)
{
	yield SagasHelper.defaultCreate(action, CustomerAddressesApi.create, beforeAddCustomerId)
}

/**
 * View customer address
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, CustomerAddressesApi.view)
}

/**
 * Delete customer address
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* deleteModel(action)
{
	yield SagasHelper.defaultDelete(action, CustomerAddressesApi.delete)
}

/**
 * Update customer address
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* update(action)
{
	yield SagasHelper.defaultUpdate(action, CustomerAddressesApi.update)
}

export default [
	takeLatest(CUSTOMER_ADDRESSES_ACTION.LIST, list),
	takeLatest(CUSTOMER_ADDRESSES_ACTION.CREATE, create),
	takeLatest(CUSTOMER_ADDRESSES_ACTION.VIEW, view),
	takeLatest(CUSTOMER_ADDRESSES_ACTION.DELETE, deleteModel),
	takeLatest(CUSTOMER_ADDRESSES_ACTION.UPDATE, update),
]
