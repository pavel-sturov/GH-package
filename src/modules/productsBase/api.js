import { callApi } from 'modules/productsBase/api'

/**
 * Get products base list
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function list(searchQuery)
{
	return callApi(`/v1/products-base`, searchQuery)
}

/**
 * Get product base
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery (reviews,reviews.customer,attachments,options,minPrices)
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function view(id, searchQuery)
{
	return callApi(`/v1/products-base/${id}`, searchQuery)
}

/**
 * Print product base epc tag
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery (reviews,reviews.customer,attachments,options,minPrices)
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function printEpc(id, searchQuery)
{
	searchQuery.addRequestOptions({
		method: 'POST',
	}, true)

	return callApi(`/v1/products-base/print-epc-tag/${id}`, searchQuery)
}

/**
 * Get products base difference zone tags
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function differenceZoneTags(searchQuery)
{
	return callApi(`/v1/products-base/zone-tags-differences`, searchQuery)
}

/**
 * Update all product base
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function updateAll(searchQuery)
{
	searchQuery.addRequestOptions({
		method: 'PATCH',
	}, true)

	return callApi('/v1/products-base', searchQuery)
}

/**
 * Update product base
 *
 * @param {number} id product base identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function update(id, searchQuery)
{
	searchQuery.addRequestOptions({
		method: 'PATCH',
	}, true)

	return callApi(`/v1/products-base/${id}`, searchQuery)
}

/**
 * Delete product base
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

	return callApi(`/v1/products-base/${id}`, searchQuery)
}

/**
 * Move product base to defective
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function setDefective(id, searchQuery)
{
	searchQuery.addRequestOptions({
		method: 'POST',
	}, true)

	return callApi(`/v1/products-base/to-defective/${id}`, searchQuery)
}

/**
 * Transfer product base
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function transfer(id, searchQuery)
{
	searchQuery.addRequestOptions({
		method: 'POST',
	}, true)

	return callApi(`/v1/products-base/transfer/${id}`, searchQuery)
}

export const ProductsBaseApi = {
	view,
	list,
	update,
	updateAll,
	printEpc,
	differenceZoneTags,
	delete: deleteModel,
	setDefective,
	transfer,
}
