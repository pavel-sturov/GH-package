import { callApi } from "./api";
/**
 * Create city
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */

function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return callApi('/v1/cities', searchQuery);
}
/**
 * Update city
 *
 * @param {number} id city identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function update(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'PATCH'
  }, true);
  return callApi("/v1/cities/".concat(id), searchQuery);
}

export var CitiesApi = {
  create: create,
  update: update,
  defaultCity: function defaultCity(searchQuery) {
    return callApi('/v1/cities/default', searchQuery);
  },
  list: function list(searchQuery) {
    return callApi('/v1/cities', searchQuery);
  },
  view: function view(id, searchQuery) {
    return callApi("/v1/cities/".concat(id), searchQuery);
  }
};