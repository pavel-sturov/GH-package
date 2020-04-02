import { callApiEndpoint } from '@kakadu-dev/base-frontend-helpers/api'
import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import { AuthService } from '@kakadu-dev/base-frontend-helpers/services/AuthService'
import { call, delay, put } from '@redux-saga/core/effects'
import { AuthActions } from 'modules/auth'
import { AuthApi } from 'modules/auth/api'
import { callApi, getJwtAccessToken, getRefreshToken, requestConfig } from 'api/index'

/**
 * Repeat call api request
 * Wait done seamless login and run request
 *
 * @param {string} endpoint
 * @param {object} options
 * @param {number} attempts
 *
 * @return {IterableIterator<*>}
 */
export function* repeatRequest(endpoint, options, attempts = 1)
{
	yield delay(1500)

	if (AuthService.getInstance().getIsSeamlessLogin() && attempts < 5) {
		return repeatRequest(endpoint, options, attempts + 1)
	}

	if (AuthService.getInstance().getSeamlessLoginError()) {
		// Cancel request
		return false
	}

	return yield callApi(endpoint, options)
}

/**
 * Try seamless login (renew tokens) and repeat request
 *
 * @param {SearchQuery} dataProvider
 * @param {string} endpoint
 *
 * @return {object}
 */
export function* seamlessLogin(dataProvider, endpoint)
{
	const refreshToken = yield getRefreshToken()

	dataProvider.addRequestOptions({
		headers: {
			'Authorization-Refresh': refreshToken,
		},
	}, true)

	const dataProviderClean = dataProvider
		.cloneInstance()
		.addCustomParams({ saveAuth: true }, false)

	const result  = yield callApiEndpoint(endpoint, dataProviderClean, requestConfig)
	// Check response headers
	const headers = result && result.response && result.response.headers || null

	if (result && result.error || !headers) {
		result.error = true

		return result
	}

	return result
}

/**
 * Try renew auth token and repeat request
 *
 * @param {SearchQuery} dataProvider
 * @param {string} endpoint
 *
 * @return {object}
 */
export function* renewToken(dataProvider, endpoint)
{
	const renewSearchQuery = DataProvider
		.buildQuery()
		.addRequestOptions({
			headers: {
				'Authorization-Refresh': yield getRefreshToken(),
			},
		}, true)
		.addCustomParams({
			saveAuth: true,
		}, true)

	let result = {}

	try {
		AuthService.getInstance().setSeamlessLogin(false)

		result = yield call(AuthApi.renewToken, renewSearchQuery)
	} catch (e) {
		if (e.messageData && e.messageData.status === 401) {
			const error = { message: 'Ваша сессия истекла. Выполните вход заново.' }
			yield put(AuthActions.renewTokenError(renewSearchQuery.addReduxRequestParams({ error })))
		}

		result = {
			error:    true,
			result:   {
				code:    e.code,
				message: e.message,
			},
			response: {
				status: e.messageData.status,
			},
		}
	}

	// Check response heeaders
	const headers = result && result.response && result.response.headers || null

	if (result && result.error || !headers) {
		result.error = true

		return result
	}

	const dataProviderClean = dataProvider
		.cloneInstance()
		.addCustomParams({}, false)

	return yield callApiEndpoint(endpoint, dataProviderClean, requestConfig)
}

/**
 * Handle request error
 *
 * @param {number} statusCode
 * @param {object} resultError
 * @param {SearchQuery} dataProvider
 * @param {string} endpoint
 * @param {object} options
 *
 * @return {IterableIterator<IterableIterator<*>|<"PUT", PutEffectDescriptor<*>>|*>}
 */
export function* requestErrorHandler(statusCode, resultError, dataProvider, endpoint, options)
{
	const customParams   = dataProvider.getCustomParams()
	const jwtAccessToken = yield getJwtAccessToken()

	// Try seamless login (access token expired)
	if (statusCode === 401 && jwtAccessToken) {
		if (AuthService.getInstance().getIsSeamlessLogin()) {
			return yield repeatRequest(endpoint, options)
		}

		AuthService.getInstance().setSeamlessLogin(true)

		const seamlessResult = customParams.externalRequest === true
			? yield renewToken(dataProvider, endpoint)
			: yield seamlessLogin(dataProvider, endpoint)

		const { result: seamlessError, response: seamlessResponse } = seamlessResult

		AuthService
			.getInstance()
			.setSeamlessLogin(false)
			.setSeamlessError(seamlessResult && seamlessResult.error && true)

		if (seamlessResult && !seamlessResult.error) {
			return seamlessResult
		}

		// Update error data
		resultError.code    = seamlessError && seamlessError.code
		resultError.message = seamlessError && seamlessError.message


		const statusCode2 = seamlessResponse && Number(seamlessResponse.status) || 0

		// Renew token false or seamless request false with status code 401
		if (statusCode2 === 401) {
			const logOutSearchQuery = DataProvider
				.buildQuery()
				.setCallback(() => {
					// Reauth mobile app (anonymous)
					AuthService.getInstance().authCallback()
				})

			resultError.message = 'Авторизация истекла, войдите заново.'

			try {
				yield put(AuthActions.logOut(logOutSearchQuery))
			} catch (e) {
				resultError.message = 'Неизвестная ошибка авторизации. Обратитесь к администратору.'
				// console.error(e)
				// clear error
			}
		}
	}

	return null
}
