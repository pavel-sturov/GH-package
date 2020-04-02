import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { takeLatest } from 'redux-saga/effects'
import { CUSTOMER_ACTIONS } from 'modules/customers/actionTypes'
import { CustomersApi } from 'modules/customers/api'

/**
 * Create customer
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{customers, type}>|CallEffect|PutEffect<{type}>>}
 */
function* create(action)
{
	yield SagasHelper.defaultCreate(action, CustomersApi.create)
}

/**
 * View customer
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{customers, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, CustomersApi.view)
}

/**
 * List customers
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{customers, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, CustomersApi.list)
}

/**
 * Update customer
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{customers, type}>|CallEffect|PutEffect<{type}>>}
 */
function* update(action)
{
	yield SagasHelper.defaultUpdate(action, CustomersApi.update)
}

/**
 * Delete customer
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{customers, type}>|CallEffect|PutEffect<{type}>>}
 */
function* deleteModel(action)
{
	yield SagasHelper.defaultDelete(action, CustomersApi.delete)
}

/**
 * Send push notification
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{customers, type}>|CallEffect|PutEffect<{type}>>}
 */
function* sendPush(action)
{
	yield SagasHelper.defaultCreate(action, CustomersApi.sendPush)
}

export default [
	takeLatest(CUSTOMER_ACTIONS.CREATE, create),
	takeLatest(CUSTOMER_ACTIONS.VIEW, view),
	takeLatest(CUSTOMER_ACTIONS.LIST, list),
	takeLatest(CUSTOMER_ACTIONS.UPDATE, update),
	takeLatest(CUSTOMER_ACTIONS.DELETE, deleteModel),
	takeLatest(CUSTOMER_ACTIONS.SEND_PUSH, sendPush),
]
