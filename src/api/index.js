import { callApi as defaultCallApi } from '@kakadu-dev/base-frontend-helpers/api'
import { PLATFORM, TYPE } from '@kakadu-dev/base-frontend-helpers/helpers/Client'
import { deleteCookie, getCookie, setCookie } from '@kakadu-dev/base-frontend-helpers/helpers/Cookie'
import { AuthService } from '@kakadu-dev/base-frontend-helpers/services/AuthService'
import FetchService from '@kakadu-dev/base-frontend-helpers/services/FetchService'
import { API_URL, BUILD_TARGET, ENVIRONMENT_DEV, LANGUAGE_CODE } from 'config'
import { repeatRequest, requestErrorHandler } from 'api/authHelpers'

/**
 * Get jwt access token
 *
 * @return {string}
 */
export function getJwtAccessToken()
{
	return getCookie('JwtAccessToken')
}

/**
 * Get jwt refresh token
 *
 * @return {string}
 */
export function getRefreshToken()
{
	return getCookie('JwtRefreshToken')
}

/**
 * Save firebase token
 *
 * @param {object} headers
 *
 * @return {Promise|boolean}
 */
export function saveFirebaseToken(headers)
{
	if (!headers || typeof headers.get !== 'function') {
		return false
	}

	const token = headers.get('Firebase-Token')

	if (token) {
		return setCookie('FirebaseToken', token, true)
	}

	return false
}

/**
 * Remove firebase token
 *
 * @return {Promise}
 */
function removeFirebaseToken()
{
	return deleteCookie('FirebaseToken')
}

/**
 * Save auth tokens
 *
 * @param {object} headers
 *
 * @return {undefined}
 */
export async function saveAuthTokens(headers)
{
	if (!headers || typeof headers.get !== 'function') {
		return false
	}

	const accessToken  = headers.get('Jwt-Access-Token')
	const refreshToken = headers.get('Jwt-Refresh-Token')

	if (!accessToken || !refreshToken) {
		return false
	}

	return Promise.all([
		setCookie('JwtAccessToken', accessToken, true),
		setCookie('JwtRefreshToken', refreshToken, true),
		...(TYPE === 'web' ? [deleteCookie('Guest-Id')] : []),
		saveFirebaseToken(headers),
	])
}

/**
 * Remove auth tokens
 *
 * @return {undefined}
 */
export function removeAuthTokens()
{
	return Promise.all([
		deleteCookie('JwtAccessToken'),
		deleteCookie('JwtRefreshToken'),
		removeFirebaseToken(),
	])
}

/**
 * Save guest identity
 *
 * @param {Object} headers
 *
 * @return {boolean}
 */
export function saveGuestId(headers)
{
	if (!headers || typeof headers.get !== 'function') {
		return false
	}

	const guestId = headers.get('Guest-Id')

	if (typeof guestId === 'string' && guestId.length > 0) {
		return setCookie('Guest-Id', guestId, true)
	}

	return true
}

/**
 * Get guest identity
 *
 * @return {string | *}
 */
export function getGuestId()
{
	return getCookie('Guest-Id')
}

/**
 * Request config
 *
 * @type {object}
 */
export const requestConfig = {
	domain:         API_URL,
	requestHeaders: {
		'Accept-Language': LANGUAGE_CODE,
		'Client':          TYPE,
		'ClientDevice':    PLATFORM,
		...(ENVIRONMENT_DEV ? { 'Cookie': 'XDEBUG_PROFILE="PHPSTORM"' } : {}),
		...(BUILD_TARGET === 'server' ? { 'User-Agent': 'Kakadu Base Node Server. Version: 1' } : {}),
	},
	async successCallback(apiResult, customParams)
	{
		if (!apiResult.response || !apiResult.response.headers) {
			return
		}

		if (TYPE === 'web') {
			await saveGuestId(apiResult.response.headers)
		}

		// Save new jwt tokens
		if (customParams.saveAuth) {
			await saveAuthTokens(apiResult.response.headers)

			AuthService
				.getInstance()
				.setSeamlessLogin(false)
				.setSeamlessError(false)
		}
	},
}

/**
 * Make request and preprocessing response
 *
 * @param {string} endpoint
 * @param {SearchQuery|object} options
 *
 * @return {IterableIterator<Promise<{response: {response: Response, json: any}}|{error: (*|string)}>|*>}
 */
export function* callApi(endpoint, options)
{
	const result = yield defaultCallApi(endpoint, options, {
		* initRequest()
		{
			if (AuthService.getInstance().getIsSeamlessLogin()) {
				return yield repeatRequest(endpoint, options)
			}

			return null
		},
		* beforeRequest(dataProvider)
		{
			const jwtAccessToken = yield getJwtAccessToken()

			// Add jwt access token to headers if exist
			if (jwtAccessToken) {
				dataProvider.addRequestOptions({
					headers: {
						Authorization: `Jwt ${jwtAccessToken}`,
					},
				}, true)
			} else {
				// Or add guest identity if exist
				const guestId = yield getGuestId()

				if (guestId) {
					dataProvider.addRequestOptions({
						headers: {
							GuestId: guestId,
						},
					}, true)
				}
			}

			dataProvider.addRequestOptions({
				headers: FetchService.getInstance().getClientHeaders(),
			}, true)
		},
		* handleError(statusCode, resultError, dataProvider, resultEndpoint)
		{
			return yield requestErrorHandler(statusCode, resultError, dataProvider, resultEndpoint, endpoint, options)
		},
		requestConfig,
	})

	AuthService.getInstance().setSeamlessError(false)

	if (BUILD_TARGET === 'server') {
		FetchService.getInstance().setApiHeaders(result && result.response && result.response.headers)
	}

	return result
}
