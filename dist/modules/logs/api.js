import { callApi } from "./api";
/**
 * Delete log
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
  return callApi("/v1/logs/".concat(id), searchQuery);
}
/**
 * Delete all logs
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function deleteAll(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'DELETE'
  }, true);
  return callApi('/v1/logs', searchQuery);
}

export var LogsApi = {
  list: function list(searchQuery) {
    return callApi('/v1/logs', searchQuery);
  },
  view: function view(id, searchQuery) {
    return callApi("/v1/logs/".concat(id), searchQuery);
  },
  "delete": deleteModel,
  deleteAll: deleteAll
};