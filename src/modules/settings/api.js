import { callApi } from 'modules/settings/api'

/**
 * Update setting
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function update(id, searchQuery)
{
	searchQuery
		.addRequestOptions({
			method: 'PATCH',
		}, true)
		.addBody({
			name: id,
		}, true)

	return callApi('/v1/settings', searchQuery)
}

/**
 * Get settings list
 *
 * @param {SearchQuery} filter
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function list(searchQuery)
{
	return callApi('/v1/settings', searchQuery)
}

/**
 * Get settings
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function view(id, searchQuery)
{
	return callApi(`/v1/settings/view?id=${id}`, searchQuery)
}

export const SettingsApi = {
	listAvailable: (searchQuery) => callApi('/v1/settings/list', searchQuery),
	update,
	list,
	view,
}
