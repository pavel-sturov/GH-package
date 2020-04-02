import { callApi } from 'modules/cities/api'

/**
 * Create city
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

	return callApi('/v1/cities', searchQuery)
}

/**
 * Update city
 *
 * @param {number} id city identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function update(id, searchQuery)
{
	searchQuery.addRequestOptions({
		method: 'PATCH',
	}, true)

	return callApi(`/v1/cities/${id}`, searchQuery)
}

export const CitiesApi = {
	create,
	update,
	defaultCity: (searchQuery) => callApi('/v1/cities/default', searchQuery),
	list:        (searchQuery) => callApi('/v1/cities', searchQuery),
	view:        (id, searchQuery) => callApi(`/v1/cities/${id}`, searchQuery),
}
