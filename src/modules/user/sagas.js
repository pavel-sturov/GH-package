import { FirebaseMessaging } from '@kakadu-dev/base-frontend-helpers/firebase/messaging'
import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import jwt_decode from 'jwt-decode'
import { call, put, select, takeLatest, throttle } from 'redux-saga/effects'
import { getJwtAccessToken, UsersApi } from 'modules/user/api'
import { BUILD_TARGET } from 'config'
import { Customer } from 'models/Customers'
import { CustomerAuthMethodApi } from 'modules/customersAuthMethods/api'
import { DispatchSelector, StateSelector } from 'modules/selectors'
import { UsersActions } from 'modules/user/actionCreators'
import { USER_ACTION } from 'modules/user/actionTypes'

/**
 * Store selectors
 *
 * @type {{getUserId: (function(*): *)}}
 */
const selectors = {
	/**
	 * Get users
	 *
	 * @param state
	 *
	 * @return {*}
	 */
	getUser:         (state) => StateSelector.user.getUser(state),
	getUserCity:     (state) => StateSelector.user.getUserCity(state),
	getUserSettings: (state) => StateSelector.user.getUserSettings(state),
}

/**
 * View user
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* viewUser(action)
{
	const { payload, type }           = action
	const { id, searchQuery }         = payload
	const { request, success, error } = RequestActionHelper.getAllActions(type)
	const sQ                          = DataProvider.getSearchQuery(searchQuery)

	const saveUserSettings = DispatchSelector.user.setUserSettings
	const saveUserCity     = DispatchSelector.user.setUserCity

	try {
		yield put(request(sQ))

		let response

		if (id) {
			response = yield call(UsersApi.viewUser, id, sQ)
		} else {
			response = yield call(UsersApi.viewCurrentUser, sQ)
		}

		yield put(success(response.result, sQ))

		if (response && response.result && response.result.settings) {
			yield put(saveUserSettings(response.result.settings))
		}

		if (response && response.result && response.result.city) {
			yield put(saveUserCity(response.result.city))
		}

		// Get firebase messages token
		if (BUILD_TARGET === 'client') {
			const firebasePushToken = yield FirebaseMessaging
				.getInstance()
				.getUserToken()

			// Update fcm token
			if (firebasePushToken) {
				yield put(UsersActions.updatePushToken(firebasePushToken))
			}
		}

		sQ.runSuccessCallback(response)
	} catch (e) {
		yield put(error(sQ.addReduxRequestParams({ error: e })))

		sQ.runErrorCallback(e)
	}

	sQ.runCallback()
}

/**
 * Get user city. Get default city for site if user is guest
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type: string, users: *}>|PutEffect<{type: string, message: *}>|CallEffect>}
 */
function* viewUserCity(action)
{
	const { payload, type }           = action
	const { request, success, error } = RequestActionHelper.getAllActions(type)
	const searchQuery                 = DataProvider.getSearchQuery(payload)

	try {
		// Get city from user
		const userCity = yield select(selectors.getUserCity)

		if (!userCity || !userCity.result) {
			yield put(request(searchQuery))

			// Get default city
			const response = yield call(UsersApi.viewUserCity, searchQuery)

			yield put(success(response.result))

			searchQuery.runSuccessCallback(response)
		} else {
			yield put(success(userCity.result, searchQuery))

			searchQuery.runSuccessCallback(userCity)
		}
	} catch (e) {
		yield put(error(searchQuery.addReduxRequestParams({ error: e })))

		searchQuery.runErrorCallback(e)
	}

	searchQuery.runCallback()
}

/**
 * Get user settings.
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type: string, users: *}>|PutEffect<{type: string, message: *}>|CallEffect>}
 */
function* viewUserSettings(action)
{
	const { payload, type }           = action
	const { id, searchQuery }         = payload
	const { request, success, error } = RequestActionHelper.getAllActions(type)
	const sQ                          = DataProvider.getSearchQuery(searchQuery)

	try {
		const currentUser = yield select(selectors.getUser)

		if (!currentUser.result || !currentUser.result.settings) {
			yield put(request(sQ))

			const userId = id || (currentUser.result && currentUser.result.id)

			const response = yield call(UsersApi.viewSettings, userId, sQ)

			yield put(success(response.result))
		} else {
			// Get settings from user
			const userSettings = yield select(selectors.getUserSettings)

			yield put(success(userSettings.result, sQ))
		}

		sQ.runSuccessCallback()
	} catch (e) {
		yield put(error(sQ.addReduxRequestParams({ error: e })))

		sQ.runErrorCallback(e)
	}

	sQ.runCallback()
}

/**
 * Update user
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* updateUser(action)
{
	const { payload, type }           = action
	const { id, searchQuery }         = payload
	const { request, success, error } = RequestActionHelper.getAllActions(type)
	const sQ                          = DataProvider.getSearchQuery(searchQuery)
	const saveUser                    = DispatchSelector.user.setUser

	try {
		yield put(request(sQ))

		let realId = id

		if (!id) {
			const currentUserState = yield select(selectors.getUser)
			const user             = Customer.create(currentUserState)

			realId = user.getId()
		}

		const response = yield call(UsersApi.updateUser, realId, sQ)

		yield put(success())
		yield put(saveUser(response.result))

		sQ.runSuccessCallback(response)
	} catch (e) {
		yield put(error(sQ.addReduxRequestParams({ error: e })))

		sQ.runErrorCallback(e)
	}

	sQ.runCallback()
}

/**
 * Update user settings
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* updateUserSettings(action)
{
	const { payload, type }           = action
	const { id, searchQuery }         = payload
	const { request, success, error } = RequestActionHelper.getAllActions(type)
	const sQ                          = DataProvider.getSearchQuery(searchQuery)
	const setUserSetting              = DispatchSelector.user.setUserSettings

	try {
		yield put(request(sQ))

		let realId = id

		if (!id) {
			const currentUserState = yield select(selectors.getUser)
			const user             = Customer.create(currentUserState)

			realId = user.getId()
		}

		const response = yield call(UsersApi.updateSettings, realId, sQ)

		yield put(success())
		yield put(setUserSetting(response.result))

		sQ.runSuccessCallback(response)
	} catch (e) {
		yield put(error(sQ.addReduxRequestParams({ error: e })))

		sQ.runErrorCallback(e)
	}

	sQ.runCallback()
}

/**
 * Update main user info
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* updateMainUserInfo(action)
{

	const { payload, type }           = action
	const { id, searchQuery }         = payload
	const { request, success, error } = RequestActionHelper.getAllActions(type)
	const sQ                          = DataProvider.getSearchQuery(searchQuery)

	const userSettingsFields = sQ.getBody().settings
	const userFields         = sQ.getBody().fields

	const updateUserFieldsAction   = DispatchSelector.user.updateUserFields
	const updateUserSettingsAction = DispatchSelector.user.updateUserSettings

	try {
		yield put(request(sQ))

		const [responseFields, responseSettings] = yield [
			updateUser(updateUserFieldsAction({
				id,
				searchQuery: DataProvider.buildQuery().addBody(userSettingsFields),
			})),
			updateUserSettings(updateUserSettingsAction({
				id,
				searchQuery: DataProvider.buildQuery().addBody(userFields),
			})),
		]

		yield put(success({
			fields:   responseFields.result,
			settings: responseSettings.result,
		}, sQ))

		sQ.runSuccessCallback(responseFields, responseSettings)
	} catch (e) {
		yield put(error(sQ.addReduxRequestParams({ error: e })))

		sQ.runErrorCallback(e)
	}

	sQ.runCallback()
}

function* updatePushToken(action)
{
	const { payload, type }           = action
	const { request, success, error } = RequestActionHelper.getAllActions(type)
	const sQ                          = DataProvider.buildQuery()

	try {
		yield put(request(sQ))

		const jwtTokenEncoded = yield getJwtAccessToken()

		if (!jwtTokenEncoded) {
			// Отсутствует токен авторизации
			return
		}

		const jwtDecoded = jwt_decode(jwtTokenEncoded)
		const userAuthId = jwtDecoded && jwtDecoded.authId

		if (!userAuthId) {
			// Отсутствует id метода авторизации
			return
		}

		sQ.addBody({
			pushToken: payload,
		})

		const response = yield call(CustomerAuthMethodApi.update, userAuthId, sQ)

		yield put(success(response, sQ))

		sQ.runSuccessCallback(response)
	} catch (e) {
		yield put(error(sQ.addReduxRequestParams({ error: e })))

		sQ.runErrorCallback(e)
	}

	sQ.runCallback()
}

export default [
	takeLatest(USER_ACTION.USER, viewUser),
	takeLatest(USER_ACTION.UPDATE_USER_FIELDS, updateUser),
	takeLatest(USER_ACTION.USER_CITY, viewUserCity),
	takeLatest(USER_ACTION.USER_SETTINGS, viewUserSettings),
	takeLatest(USER_ACTION.UPDATE_USER_SETTINGS, updateUserSettings),
	takeLatest(USER_ACTION.UPDATE_MAIN_USER_INFO, updateMainUserInfo),
	throttle(60000, USER_ACTION.UPDATE_PUSH_TOKEN, updatePushToken),
]
