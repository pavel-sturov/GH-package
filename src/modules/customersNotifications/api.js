import { callApi } from 'modules/customersNotifications/api'

/**
 * Get customer notifications
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function list(searchQuery)
{
	return callApi('/v1/customers-notifications', searchQuery)
}

/**
 * Update customer notification
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

	return callApi(`/v1/customers-notifications/${id}`, searchQuery)
}

export const CustomerNotificationsApi = {
	list,
	update,
	view: (id, searchQuery) => callApi(`/v1/customers-notifications/${id}`, searchQuery),
}
