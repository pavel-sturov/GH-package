import { callApi } from 'modules/productsBarcodes/api'

/**
 * Create product barcode
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

	return callApi('/v1/products-barcodes', searchQuery)
}

/**
 * Get products barcodes list
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function list(searchQuery)
{
	return callApi(`/v1/products-barcodes`, searchQuery)
}

/**
 * Update product barcode
 *
 * @param {number} id product identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function update(id, searchQuery)
{
	searchQuery.addRequestOptions({
		method: 'PATCH',
	}, true)

	return callApi(`/v1/products-barcodes/${id}`, searchQuery)
}

/**
 * Delete product barcode
 *
 * @param {number} id product identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function deleteModel(id, searchQuery)
{
	searchQuery.addRequestOptions({
		method: 'DELETE',
	}, true)

	return callApi(`/v1/products-barcodes/${id}`, searchQuery)
}

export const ProductsBarcodesApi = {
	create,
	list,
	update,
	delete: deleteModel,
}
