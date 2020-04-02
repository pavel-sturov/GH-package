import { callApi } from 'modules/productsReviews/api'
import SearchQuery from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider/SearchQuery'

/**
 * Get products reviews list
 *
 * @param {SearchQuery} filter
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function list(searchQuery)
{
	return callApi('/v1/products-reviews', searchQuery)
}

/**
 * Add product review
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function create(searchQuery)
{
	searchQuery.addRequestOptions({
		method: 'POST',
	}, true)

	return callApi('/v1/products-reviews', searchQuery)
}

/**
 * Update product review
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function update(id, searchQuery)
{
	searchQuery.addRequestOptions({
		method: 'PATCH',
	}, true)

	return callApi(`/v1/products-reviews/${id}`, searchQuery)
}

/**
 * Get product review
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function view(id, searchQuery)
{
	return callApi(`/v1/products-reviews/${id}`, searchQuery)
}

export const ProductsReviewsApi = {
	view,
	list,
	create,
	update,
}
