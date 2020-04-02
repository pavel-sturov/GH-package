import { callApi } from 'modules/companiesOffers/api'

/**
 * Create company offer
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

	return callApi('/v1/companies-offers', searchQuery)
}

/**
 * Update company offer
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

	return callApi(`/v1/companies-offers/${id}`, searchQuery)
}

/**
 * Delete company offer
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

	return callApi(`/v1/companies-offers/${id}`, searchQuery)
}

export const CompaniesOffersApi = {
	list:   (searchQuery) => callApi('/v1/companies-offers', searchQuery),
	create,
	view:   (id, searchQuery) => callApi(`/v1/companies-offers/${id}`, searchQuery),
	update,
	delete: deleteModel,
}
