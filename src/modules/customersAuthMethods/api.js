import { callApi } from 'modules/customersAuthMethods/api'

/**
 * Get customer auth methods
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function list(searchQuery)
{
	return callApi('/v1/customers-auth-methods', searchQuery)
}

/**
 * Update customer auth method
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function update(id, searchQuery)
{
	searchQuery.addRequestOptions({
		method: 'PATCH',
	}, true)

	return callApi(`/v1/customers-auth-methods/${id}`, searchQuery)
}

export const CustomerAuthMethodApi = {
	list,
	update,
	view: (id, searchQuery) => callApi(`/v1/customers-auth-methods/${id}`, searchQuery),
}
