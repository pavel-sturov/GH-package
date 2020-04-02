import { callApi } from 'modules/customersCompares/api'

/**
 * Add customer compare
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

	return callApi('/v1/customers-compares', searchQuery)
}

/**
 * Delete customer compare
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function deleteModel(id, searchQuery)
{
	searchQuery.addRequestOptions({
		method: 'DELETE',
	}, true)

	return callApi(`/v1/customers-compares/${id}`, searchQuery)
}

/**
 * Delete all compares
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function deleteAll(searchQuery)
{
	searchQuery.addRequestOptions({
		method: 'DELETE',
	}, true)

	return callApi('/v1/customers-compares', searchQuery)
}

export const CustomerCompareApi = {
	list:         (searchQuery) => callApi('/v1/customers-compares', searchQuery),
	create,
	view:         (id, searchQuery) => callApi(`/v1/customers-compares/${id}`, searchQuery),
	delete:       deleteModel,
	deleteAll,
	hierarchical: (searchQuery) => callApi('/v1/customers-compares/hierarchical', searchQuery),
	products:     (searchQuery) => callApi('/v1/customers-compares/products', searchQuery),
}
