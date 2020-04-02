import firebase from '@kakadu-dev/base-frontend-helpers/firebase'
import { FirebaseMessaging } from '@kakadu-dev/base-frontend-helpers/firebase/messaging'
import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { call, put, select, takeLatest } from 'redux-saga/effects'
import { getRefreshToken, removeAuthTokens } from 'modules/auth/api'
import { DispatchSelector, StateSelector } from 'modules/selectors'
import { UsersActions } from 'modules/user'
import { AUTH_ACTION } from 'modules/auth/actionTypes'
import { AuthApi } from 'modules/auth/api'

/**
 * Store selectors
 *
 * @type {{getUserId: (function(*): *)}}
 */
const selectors = {
	/**
	 * Get auth
	 *
	 * @param state
	 *
	 * @return {*}
	 */
	getAuth: (state) => StateSelector.auth.isAuth(state),
}

/**
 * Sign in firebase (google/facebook/vk/phone)
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* fetchSignIn(action)
{
	const { payload, type }           = action
	const { request, success, error } = RequestActionHelper.getAllActions(type)

	const saveUser         = DispatchSelector.user.setUser
	const saveUserSettings = DispatchSelector.user.setUserSettings
	const saveUserCity     = DispatchSelector.user.setUserCity
	const searchQuery      = DataProvider
		.getSearchQuery(payload)
		.addCustomParams({
			saveAuth: true,
		}, true)

	try {
		yield put(request(searchQuery))

		const response = yield call(AuthApi.signIn, searchQuery)

		const customParams = searchQuery.getCustomParams()
		const bodyParams   = searchQuery.getBody()

		// Check response headers
		if (!response && response.response && response.response.headers) {
			throw new Error('Ошибка авторизации. Отсутствуют токены')
		}

		yield put(success({
			provider:     bodyParams.provider,
			realProvider: customParams.realProvider || bodyParams.provider,
		}, searchQuery))
		yield put(saveUser(response.result))

		if (response && response.result && response.result.settings) {
			yield put(saveUserSettings(response.result.settings))
		}

		if (response && response.result && response.result.city) {
			yield put(saveUserCity(response.result.city))
		}

		// Get firebase messages token
		const firebasePushToken = yield FirebaseMessaging
			.getInstance()
			.getUserToken()

		// Update fcm token
		if (firebasePushToken) {
			yield put(UsersActions.updatePushToken(firebasePushToken))
		}

		searchQuery.runSuccessCallback(response)
	} catch (e) {
		yield put(error(searchQuery.addReduxRequestParams({ error: e })))

		searchQuery.runErrorCallback(e)
	}

	searchQuery.runCallback()
}

/**
 * Log out (google/facebook/vk/phone)
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* fetchLogOut(action)
{
	const { payload, type }           = action
	const { request, success, error } = RequestActionHelper.getAllActions(type)

	const removeUser        = DispatchSelector.user.setUser
	const removeUserSetting = DispatchSelector.user.setUserSettings
	const removeAuth        = DispatchSelector.auth.setAuth
	const searchQuery       = DataProvider.getSearchQuery(payload)

	try {
		const auth = yield select(selectors.getAuth)

		yield put(request(searchQuery))

		const response = yield call(AuthApi.logOut, searchQuery)

		firebase.auth().signOut().catch(() => {
			// Skip firebase logout error
			// Dont` show unhandled promise rejection
		})

		yield put(success())
		yield put(removeUser(null))
		yield put(removeUserSetting(null))
		yield put(removeAuth(null))

		// Remove auth tokens
		yield removeAuthTokens()

		searchQuery.runSuccessCallback(response, auth)
	} catch (e) {
		yield put(error(searchQuery.addReduxRequestParams({ error: e })))

		searchQuery.runErrorCallback(e)
	}

	searchQuery.runCallback()
}

/**
 * Renew auth tokens
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* renewToken(action)
{
	const { payload, type }           = action
	const { request, success, error } = RequestActionHelper.getAllActions(type)
	const searchQuery                 = DataProvider
		.getSearchQuery(payload)
		.addRequestOptions({
			headers: {
				'Authorization-Refresh': yield getRefreshToken(),
			},
		}, true)
		.addCustomParams({
			saveAuth: true,
		}, true)

	try {
		yield put(request(searchQuery))

		const response = yield call(AuthApi.renewToken, searchQuery)

		yield put(success())

		// Check response headers
		if (!response && response.response && response.response.headers) {
			throw new Error('Ошибка обновления авторизации. Отсутствуют токены')
		}

		searchQuery.runSuccessCallback(response)
	} catch (e) {
		yield put(error(searchQuery.addReduxRequestParams({ error: e })))

		searchQuery.runErrorCallback(e)
	}

	searchQuery.runCallback()
}

export default [
	takeLatest(AUTH_ACTION.SIGN_IN, fetchSignIn),
	takeLatest(AUTH_ACTION.LOG_OUT, fetchLogOut),
	takeLatest(AUTH_ACTION.RENEW_TOKEN, renewToken),
]
