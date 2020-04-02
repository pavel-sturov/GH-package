import { callApi } from "./api";
/**
 * Create category relation
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */

function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return callApi('/v1/categories-relations', searchQuery);
}
/**
 * Get categories relations list
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function list(searchQuery) {
  return callApi("/v1/categories-relations", searchQuery);
}
/**
 * Delete product relation
 *
 * @param {number} id category relation identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function deleteModel(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'DELETE'
  }, true);
  return callApi("/v1/categories-relations/".concat(id), searchQuery);
}

export var CategoriesRelationsApi = {
  create: create,
  list: list,
  "delete": deleteModel
};