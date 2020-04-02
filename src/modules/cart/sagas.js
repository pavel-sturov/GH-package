import { put, select, takeLatest } from 'redux-saga/effects'
import { getClientId, TYPE } from '@kakadu-dev/base-frontend-helpers/helpers/Client'
import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { beforeAddCustomerId } from 'helpers/Redux/SagasHelper'
import { DispatchSelector, StateSelector } from 'modules/selectors'
import { UsersStateSelectors } from 'modules/user'
import { CartActions } from 'modules/cart/actionCreators'
import { CartStateSelectors } from 'modules/cart/actionSelectors'
import { CART_ACTION } from 'modules/cart/actionTypes'
import { CartApi } from 'modules/cart/api'

/**
 * Get cart products
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, CartApi.list)
}

/**
 * Add product to cart
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* create(action)
{
	yield SagasHelper.defaultCreate(action, CartApi.create, function* (searchQuery) {
		yield beforeAddCustomerId(searchQuery)

		const body = searchQuery.getBody()

		if (!body.cityId) {
			const currentUser = yield select(UsersStateSelectors.getUser)
			// Add user city id if not exist
			!body.cityId && (body.cityId = currentUser.result.cityId)

			searchQuery.addBody(body, true)
		}
	}, function* (...params) {
		yield SagasHelper.afterMergeModels(...params, 0, CartStateSelectors.list, CartActions.setList)
	})
}

/**
 * Update cart product
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* update(action)
{
	yield SagasHelper.defaultUpdate(action, CartApi.update, null, function* (...params) {
		yield SagasHelper.afterMergeModels(...params, CartStateSelectors.list, CartActions.setList)
	})
}

/**
 * Delete cart products
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* deleteModel(action)
{
	yield SagasHelper.defaultDelete(action, CartApi.deleteModel, null, function* (...params) {
		yield SagasHelper.afterDeleteModelFromList(...params, CartStateSelectors.list, CartActions.setList)
	})
}

/**
 * Delete all cart products
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* deleteAll(action)
{
	yield SagasHelper.defaultDeleteAll(action, CartApi.deleteAll, null, function* (...params) {
		yield SagasHelper.afterClearState(...params, CartActions.setList)
	})
}

/**
 * Get cart checkout info
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* checkout(action)
{
	yield SagasHelper.defaultCustom(action, CartApi.checkout, null, null, DataProvider.handleResponseView)
}

/**
 * Get cart checkout info for terminal
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* checkoutTerminal(action)
{
	yield SagasHelper.defaultCustom(action, CartApi.checkoutTerminal, null, null, DataProvider.handleResponseView)
}


/**
 * Create order
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* createOrder(action)
{
	yield SagasHelper.defaultCustom(action, CartApi.createOrder, function* () {
		const { result: user } = yield select(StateSelector.user.getUser)

		// Sign In anonymously if user not exist
		if (!user) {
			const signInAction = DispatchSelector.auth.signIn
			const clientId     = yield getClientId()

			const signInQuery = DataProvider
				.buildQuery()
				.addExpands('settings', 'city')
				.addBody({
					provider: TYPE,
					token:    clientId,
					params:   {
						browserId: clientId,
					},
				})

			yield put(signInAction(signInQuery))
		}
	}, null, DataProvider.handleResponseView)
}

/**
 * Create order from terminal
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* createOrderTerminal(action)
{
	yield SagasHelper.defaultCustom(action, CartApi.createOrderTerminal, null, null, DataProvider.handleResponseView)
}

/**
 * Start session terminal
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* startSessionTerminal(action)
{
	yield SagasHelper.defaultCustom(action, CartApi.startSessionTerminal, null, null, DataProvider.handleResponseView)
}

export default [
	takeLatest(CART_ACTION.LIST, list),
	takeLatest(CART_ACTION.CREATE, create),
	takeLatest(CART_ACTION.UPDATE, update),
	takeLatest(CART_ACTION.DELETE, deleteModel),
	takeLatest(CART_ACTION.DELETE_ALL, deleteAll),
	takeLatest(CART_ACTION.CHECKOUT, checkout),
	takeLatest(CART_ACTION.CHECKOUT_TERMINAL, checkoutTerminal),
	takeLatest(CART_ACTION.CREATE_ORDER, createOrder),
	takeLatest(CART_ACTION.CREATE_ORDER_TERRMINAL, createOrderTerminal),
	takeLatest(CART_ACTION.START_SESSION_TERMINAL, startSessionTerminal),
]
