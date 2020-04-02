import { callApi } from "./api";
/**
 * Get customer favorites
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */

function list(searchQuery) {
  return callApi('/v1/customers-favorites', searchQuery);
}
/**
 * Add customer favorite
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return callApi('/v1/customers-favorites', searchQuery);
}
/**
 * Delete customer favorite
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
  return callApi("/v1/customers-favorites/".concat(id), searchQuery);
}
/**
 * Delete all favorites
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function deleteAll(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'DELETE'
  }, true);
  return callApi('/v1/customers-favorites', searchQuery);
}

export var CustomerFavoriteApi = {
  list: list,
  create: create,
  view: function view(id, searchQuery) {
    return callApi("/v1/customers-favorites/".concat(id), searchQuery);
  },
  "delete": deleteModel,
  deleteAll: deleteAll
};