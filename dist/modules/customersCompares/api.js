import { callApi } from "./api";
/**
 * Add customer compare
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */

function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return callApi('/v1/customers-compares', searchQuery);
}
/**
 * Delete customer compare
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
  return callApi("/v1/customers-compares/".concat(id), searchQuery);
}
/**
 * Delete all compares
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function deleteAll(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'DELETE'
  }, true);
  return callApi('/v1/customers-compares', searchQuery);
}

export var CustomerCompareApi = {
  list: function list(searchQuery) {
    return callApi('/v1/customers-compares', searchQuery);
  },
  create: create,
  view: function view(id, searchQuery) {
    return callApi("/v1/customers-compares/".concat(id), searchQuery);
  },
  "delete": deleteModel,
  deleteAll: deleteAll,
  hierarchical: function hierarchical(searchQuery) {
    return callApi('/v1/customers-compares/hierarchical', searchQuery);
  },
  products: function products(searchQuery) {
    return callApi('/v1/customers-compares/products', searchQuery);
  }
};