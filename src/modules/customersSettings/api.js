import { callApi } from 'modules/customersSettings/api'

/**
 * Update customer settings
 *
 * @param {number} id customer identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function update(id, searchQuery)
{
	searchQuery.addRequestOptions({
		method: 'PATCH',
	}, true)

	return callApi(`/v1/customers-settings/${id}`, searchQuery)
}

export const CustomersSettingsApi = {
	view: (id, searchQuery) => callApi(`/v1/customers-settings/${id}`, searchQuery),
	update,
}
