import { callApi } from "./api";
/**
 * Create products attachment
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */

function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return callApi('/v1/products-attachments', searchQuery);
}
/**
 * Get products attachments list
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function list(searchQuery) {
  return callApi("/v1/products-attachments", searchQuery);
}
/**
 * Update products attachment
 *
 * @param {number} id product attachment identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function update(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'PATCH'
  }, true);
  return callApi("/v1/products-attachments/".concat(id), searchQuery);
}
/**
 * Delete products attachment
 *
 * @param {number} id product attachment identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function deleteModel(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'DELETE'
  }, true);
  return callApi("/v1/products-attachments/".concat(id), searchQuery);
}
/**
 * Get products attachment
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function view(id, searchQuery) {
  return callApi("/v1/products-attachments/".concat(id), searchQuery);
}

export var ProductsAttachmentsApi = {
  create: create,
  list: list,
  update: update,
  "delete": deleteModel,
  view: view
};