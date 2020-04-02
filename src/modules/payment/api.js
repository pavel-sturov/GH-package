import { callApi } from 'modules/payment/api'
import { API_PAYMENT } from 'config'

/**
 * List payment cards
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function list(searchQuery)
{
	searchQuery.addCustomParams({
		externalRequest: true,
	}, true)

	return callApi(`${API_PAYMENT}/v1/payment-method/list`, searchQuery)
}

/**
 * Create payment card
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function create(searchQuery)
{
	searchQuery
		.addRequestOptions({
			method: 'POST',
		}, true)
		.addCustomParams({
			externalRequest: true,
		}, true)

	return callApi(`${API_PAYMENT}/v1/payment-method/save`, searchQuery)
}

/**
 * Send post data after 3D secure done
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function postSecure(searchQuery)
{
	searchQuery
		.addRequestOptions({
			method: 'POST',
		}, true)
		.addCustomParams({
			externalRequest: true,
		}, true)

	return callApi(`${API_PAYMENT}/v1/payment-method/post-secure`, searchQuery)
}

/**
 * Create payment card with redirect
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function createWithRedirect(searchQuery)
{
	searchQuery
		.addRequestOptions({
			method: 'POST',
		}, true)
		.addCustomParams({
			externalRequest: true,
		}, true)

	return callApi(`${API_PAYMENT}/v1/payment-method/add`, searchQuery)
}

/**
 * Set primary payment card
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function setMain(searchQuery)
{
	searchQuery
		.addRequestOptions({
			method: 'POST',
		}, true)
		.addCustomParams({
			externalRequest: true,
		}, true)

	return callApi(`${API_PAYMENT}/v1/payment-method/set-main`, searchQuery)
}

/**
 * Delete payment card
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function deleteCard(id, searchQuery)
{
	searchQuery
		.addRequestOptions({
			method: 'DELETE',
		}, true)
		.addCustomParams({
			externalRequest: true,
		}, true)

	return callApi(`${API_PAYMENT}/v1/payment-method/remove/${id}`, searchQuery)
}

export const PaymentApi = {
	list,
	create,
	postSecure,
	createWithRedirect,
	setMain,
	delete: deleteCard,
}
