import { callApi } from "./api";
/**
 * Get properties types list
 *
 * @param {SearchQuery} filter
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */

function list(searchQuery) {
  return callApi('/v1/properties-types', searchQuery);
}
/**
 * Add property type
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return callApi('/v1/properties-types', searchQuery);
}
/**
 * Update property type
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
  return callApi("/v1/properties-types/".concat(id), searchQuery);
}
/**
 * Get property type
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function view(id, searchQuery) {
  return callApi("/v1/properties-types/".concat(id), searchQuery);
}
/**
 * Delete property type
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
  return callApi("/v1/properties-types/".concat(id), searchQuery);
}

export var PropertiesTypesApi = {
  view: view,
  list: list,
  create: create,
  update: update,
  "delete": deleteModel
};