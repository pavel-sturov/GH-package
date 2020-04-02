import { callApi } from 'modules/logs/api'

/**
 * Delete log
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

	return callApi(`/v1/logs/${id}`, searchQuery)
}

/**
 * Delete all logs
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

	return callApi('/v1/logs', searchQuery)
}

export const LogsApi = {
	list:   (searchQuery) => callApi('/v1/logs', searchQuery),
	view:   (id, searchQuery) => callApi(`/v1/logs/${id}`, searchQuery),
	delete: deleteModel,
	deleteAll
}
