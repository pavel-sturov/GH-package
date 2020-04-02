import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { CUSTOMER_AUTH_METHOD_ACTIONS } from 'modules/customersAuthMethods/actionTypes'
import { CustomerAuthMethodApi } from 'modules/customersAuthMethods/api'

/**
 * Get customer auth methods
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, CustomerAuthMethodApi.list)
}

/**
 * Update customer auth method
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* update(action)
{
	yield SagasHelper.defaultUpdate(action, CustomerAuthMethodApi.update)
}

/**
 * View customer auth method
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, CustomerAuthMethodApi.view)
}

export default [
	takeLatest(CUSTOMER_AUTH_METHOD_ACTIONS.LIST, list),
	takeLatest(CUSTOMER_AUTH_METHOD_ACTIONS.UPDATE, update),
	takeLatest(CUSTOMER_AUTH_METHOD_ACTIONS.VIEW, view),
]
