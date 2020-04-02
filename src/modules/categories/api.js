import { callApi } from 'modules/categories/api'

/**
 * Get list categories
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function list(searchQuery)
{
	return callApi('/v1/categories', searchQuery)
}

/**
 * Create category
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

	return callApi('/v1/categories', searchQuery)
}

/**
 * Update category
 *
 * @param {number} id category identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function update(id, searchQuery)
{
	searchQuery.addRequestOptions({
		method: 'PATCH',
	}, true)

	return callApi(`/v1/categories/${id}`, searchQuery)
}

/**
 * Delete category
 *
 * @param {number} id category identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function deleteModel(id, searchQuery)
{
	searchQuery.addRequestOptions({
		method: 'DELETE',
	}, true)

	return callApi(`/v1/categories/${id}`, searchQuery)
}

export const CategoriesApi = {
	list,
	create,
	update,
	delete:                      deleteModel,
	view:                        (id, searchQuery) => callApi(`/v1/categories/${id}`, searchQuery),
	fetchHierarchicalCategories: (searchQuery) => callApi('/v1/categories/hierarchical', searchQuery),
	popularCategories:           (searchQuery) => callApi(`/v1/categories/popular`, searchQuery),
    filters: (id, searchQuery) => callApi(`/v1/categories/filters/${id}`, searchQuery),
}
