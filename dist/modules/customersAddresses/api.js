import { callApi } from "./api";
/**
 * Get customer adresses
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */

function list(searchQuery) {
  return callApi('/v1/customers-addresses', searchQuery);
}
/**
 * Add customer address
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return callApi('/v1/customers-addresses', searchQuery);
}
/**
 * Delete customer address
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function deleteModel(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'DELETE'
  }, true);
  return callApi("/v1/customers-addresses/".concat(id), searchQuery);
}
/**
 * Update address
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function update(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'PATCH'
  }, true);
  return callApi("/v1/customers-addresses/".concat(id), searchQuery);
}

export var CustomerAddressesApi = {
  list: list,
  create: create,
  view: function view(id, searchQuery) {
    return callApi("/v1/customers-addresses/".concat(id), searchQuery);
  },
  "delete": deleteModel,
  update: update
};