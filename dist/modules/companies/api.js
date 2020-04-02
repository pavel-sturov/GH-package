import { callApi } from "./api";
/**
 * Add company
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */

function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return callApi('/v1/companies', searchQuery);
}
/**
 * Delete company
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
  return callApi("/v1/companies/".concat(id), searchQuery);
}
/**
 * Update company
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
  return callApi("/v1/companies/".concat(id), searchQuery);
}

export var CompaniesApi = {
  list: function list(searchQuery) {
    return callApi('/v1/companies', searchQuery);
  },
  create: create,
  view: function view(id, searchQuery) {
    return callApi("/v1/companies/".concat(id), searchQuery);
  },
  "delete": deleteModel,
  update: update
};