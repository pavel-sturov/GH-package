import { callApi } from 'modules/companiesInventory/api'

/**
 * Get inventory info
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function view(id, searchQuery)
{
	return callApi(`/v1/companies/inventory/${id}`, searchQuery)
}

/**
 * Get products
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function products(searchQuery)
{
	return callApi('/v1/companies-inventory-products', searchQuery)
}

export const CompaniesInventoryApi = {
	view,
	products,
}
