import { callApi } from "../../api";
/**
 * Create product
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */

function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return callApi('/v1/products', searchQuery);
}
/**
 * Get products list
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function list(searchQuery) {
  return callApi("/v1/products", searchQuery);
}
/**
 * Update product
 *
 * @param {number} id product identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function update(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'PATCH'
  }, true);
  return callApi("/v1/products/".concat(id), searchQuery);
}
/**
 * Delete product
 *
 * @param {number} id product identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function deleteModel(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'DELETE'
  }, true);
  return callApi("/v1/products/".concat(id), searchQuery);
}
/**
 * Get product
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery (reviews,reviews.customer,attachments,options,minPrices)
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function view(id, searchQuery) {
  return callApi("/v1/products/".concat(id), searchQuery);
}
/**
 * Get product by barcode
 *
 * @param {string} barcode
 * @param {SearchQuery} searchQuery (reviews,reviews.customer,attachments,options,minPrices)
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function viewBarcode(barcode, searchQuery) {
  return callApi("/v1/products/by-barcode/".concat(barcode), searchQuery);
}
/**
 * Add roduct to stock
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function addToStock(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return callApi('/v1/products/add-to-stock', searchQuery);
}
/**
 * Upload products attachments
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function batchUpload(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return callApi('/v1/products/batch-upload-attachments', searchQuery);
}

export var ProductsApi = {
  create: create,
  list: list,
  update: update,
  "delete": deleteModel,
  view: view,
  viewBarcode: viewBarcode,
  addToStock: addToStock,
  batchUpload: batchUpload
};