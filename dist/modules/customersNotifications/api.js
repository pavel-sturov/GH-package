import { callApi } from "./api";
/**
 * Get customer notifications
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */

function list(searchQuery) {
  return callApi('/v1/customers-notifications', searchQuery);
}
/**
 * Update customer notification
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
  return callApi("/v1/customers-notifications/".concat(id), searchQuery);
}

export var CustomerNotificationsApi = {
  list: list,
  update: update,
  view: function view(id, searchQuery) {
    return callApi("/v1/customers-notifications/".concat(id), searchQuery);
  }
};