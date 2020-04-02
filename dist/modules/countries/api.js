import { callApi } from "./api";
/**
 * Create country
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */

function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return callApi('/v1/countries', searchQuery);
}
/**
 * Update country
 *
 * @param {number} id country identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function update(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'PATCH'
  }, true);
  return callApi("/v1/countries/".concat(id), searchQuery);
}

export var CountriesApi = {
  create: create,
  update: update,
  list: function list(searchQuery) {
    return callApi('/v1/countries', searchQuery);
  },
  view: function view(id, searchQuery) {
    return callApi("/v1/countries/".concat(id), searchQuery);
  }
};