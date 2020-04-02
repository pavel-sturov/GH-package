import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { takeLatest } from 'redux-saga/effects'
import { ORDERS_ACTION } from 'modules/orders/actionTypes'
import { OrdersApi } from 'modules/orders/api'

/**
 * List orders
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{orders, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, OrdersApi.list)
}

/**
 * View order
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{orders, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, OrdersApi.view)
}

/**
 * Pay for order
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{orders, type}>|CallEffect|PutEffect<{type}>>}
 */
function* pay(action)
{
	yield SagasHelper.defaultView(action, OrdersApi.pay)
}

/**
 * Finish by product
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{orders, type}>|CallEffect|PutEffect<{type}>>}
 */
function* finishByProduct(action)
{
	yield SagasHelper.defaultCreate(action, OrdersApi.finishByProduct)
}

/**
 * Finish by product
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{orders, type}>|CallEffect|PutEffect<{type}>>}
 */
function* cancelByProduct(action)
{
	yield SagasHelper.defaultCreate(action, OrdersApi.cancelByProduct)
}

export default [
	takeLatest(ORDERS_ACTION.LIST, list),
	takeLatest(ORDERS_ACTION.VIEW, view),
	takeLatest(ORDERS_ACTION.PAY, pay),
	takeLatest(ORDERS_ACTION.FINISH_BY_PRODUCT, finishByProduct),
	takeLatest(ORDERS_ACTION.CANCEL_BY_PRODUCT, cancelByProduct),
]
