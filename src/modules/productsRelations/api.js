import { callApi } from 'modules/productsRelations/api'

/**
 * Create product relation
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

	return callApi('/v1/products-relations', searchQuery)
}

/**
 * Get products relations list
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function list(searchQuery)
{
	return callApi(`/v1/products-relations`, searchQuery)
}

/**
 * Delete product relation
 *
 * @param {number} id product relation identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function deleteModel(id, searchQuery)
{
	searchQuery.addRequestOptions({
		method: 'DELETE',
	}, true)

	return callApi(`/v1/products-relations/${id}`, searchQuery)
}

/**
 * Get product relation
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function view(id, searchQuery)
{
	return callApi(`/v1/products-relations/${id}`, searchQuery)
}

export const ProductsRelationsApi = {
	create,
	list,
	delete: deleteModel,
	view,
}
