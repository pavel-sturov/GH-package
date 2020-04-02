import { callApi } from 'modules/countries/api'

/**
 * Create country
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

	return callApi('/v1/countries', searchQuery)
}

/**
 * Update country
 *
 * @param {number} id country identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function update(id, searchQuery)
{
	searchQuery.addRequestOptions({
		method: 'PATCH',
	}, true)

	return callApi(`/v1/countries/${id}`, searchQuery)
}

export const CountriesApi = {
	create,
	update,
	list: (searchQuery) => callApi('/v1/countries', searchQuery),
	view: (id, searchQuery) => callApi(`/v1/countries/${id}`, searchQuery),
}
