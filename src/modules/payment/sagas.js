import { put, takeLatest } from 'redux-saga/effects'
import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { DispatchSelector } from 'modules/selectors'
import { PAYMENT_ACTION } from 'modules/payment/actionTypes'
import { PaymentApi } from 'modules/payment/api'

/**
 * List payment cards
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, PaymentApi.list)
}

/**
 * Create payment card
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* create(action)
{
	yield SagasHelper.defaultCreate(action, PaymentApi.create)
}

/**
 * Send post data after 3D secure done
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* postSecure(action)
{
	yield SagasHelper.defaultCustom(action, PaymentApi.postSecure)
}

/**
 * Delete payment card
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* deleteCard(action)
{
	const setCardlist = DispatchSelector.payment.setList

	yield SagasHelper.defaultDelete(action, PaymentApi.delete, null, function* (response, searchQuery) {
		yield put(setCardlist(DataProvider.handleResponseList(response), searchQuery))
	})
}

/**
 * Set primary payment card
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* setMain(action)
{
	const setCardlist = DispatchSelector.payment.setList

	yield SagasHelper.defaultCustom(action, PaymentApi.setMain, null, function* (response, searchQuery) {
		yield put(setCardlist(DataProvider.handleResponseList(response), searchQuery))
	})
}

export default [
	takeLatest(PAYMENT_ACTION.LIST, list),
	takeLatest(PAYMENT_ACTION.CREATE, create),
	takeLatest(PAYMENT_ACTION.POST_SECURE, postSecure),
	takeLatest(PAYMENT_ACTION.DELETE, deleteCard),
	takeLatest(PAYMENT_ACTION.SET_MAIN, setMain),
]
