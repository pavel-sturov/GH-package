import { callApi } from 'modules/faqCategories/api'

/**
 * Add faq category
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

	return callApi('/v1/faq-categories', searchQuery)
}

/**
 * Delete faq category
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

	return callApi(`/v1/faq-categories/${id}`, searchQuery)
}

/**
 * Update faq category
 *
 * @param {number} id faq category
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function update(id, searchQuery)
{
	searchQuery.addRequestOptions({
		method: 'PATCH',
	}, true)

	return callApi(`/v1/faq-categories/${id}`, searchQuery)
}

export const FaqCategoryApi = {
	list:   (searchQuery) => callApi('/v1/faq-categories', searchQuery),
	create,
	view:   (id, searchQuery) => callApi(`/v1/faq-categories/${id}`, searchQuery),
	delete: deleteModel,
	update,
}
