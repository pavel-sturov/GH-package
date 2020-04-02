import { callApi } from 'modules/orders/api'

/**
 * Pay for order
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function pay(id, searchQuery)
{
	searchQuery.addRequestOptions({
		method: 'POST',
	}, true)

	return callApi(`/v1/orders/pay/${id}`, searchQuery)
}

/**
 * Finish by product
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function finishByProduct(searchQuery)
{
	searchQuery.addRequestOptions({
		method: 'POST',
	}, true)

	return callApi(`/v1/orders/finish-by-product`, searchQuery)
}

/**
 * Cancel by product
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function cancelByProduct(searchQuery)
{
	searchQuery.addRequestOptions({
		method: 'POST',
	}, true)

	return callApi(`/v1/orders/cancel-by-product`, searchQuery)
}

export const OrdersApi = {
	view: (id, searchQuery) => callApi(`/v1/orders/${id}`, searchQuery),
	list: (searchQuery) => callApi('/v1/orders', searchQuery),
	pay,
	finishByProduct,
	cancelByProduct,
}
