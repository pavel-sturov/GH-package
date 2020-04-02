import { callApi } from "./api";
/**
 * Get customer auth methods
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */

function list(searchQuery) {
  return callApi('/v1/customers-auth-methods', searchQuery);
}
/**
 * Update customer auth method
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function update(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'PATCH'
  }, true);
  return callApi("/v1/customers-auth-methods/".concat(id), searchQuery);
}

export var CustomerAuthMethodApi = {
  list: list,
  update: update,
  view: function view(id, searchQuery) {
    return callApi("/v1/customers-auth-methods/".concat(id), searchQuery);
  }
};