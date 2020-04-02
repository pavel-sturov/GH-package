import { callApi } from 'modules/companiesSettings/api'

/**
 * Update company settings
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

	return callApi(`/v1/companies-settings/${id}`, searchQuery)
}

export const CompaniesSettingsApi = {
	view: (id, searchQuery) => callApi(`/v1/companies-settings/${id}`, searchQuery),
	update,
}
