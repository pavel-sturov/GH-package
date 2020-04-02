import { callApi } from "./api";
/**
 * Create customer
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */

function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return callApi('/v1/customers', searchQuery);
}
/**
 * Get list customers
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function list(searchQuery) {
  return callApi('/v1/customers', searchQuery);
}
/**
 * Update customer
 *
 * @param {number} id customer identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function update(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'PATCH'
  }, true);
  return callApi("/v1/customers/".concat(id), searchQuery);
}
/**
 * Delete customer
 *
 * @param {number} id customer identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function deleteModel(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'DELETE'
  }, true);
  return callApi("/v1/customers/".concat(id), searchQuery);
}
/**
 * Update customer avatar
 *
 * @param {number} id customer identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function uploadAvatar(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return callApi("/v1/customers/upload-avatar/".concat(id), searchQuery);
}
/**
 * Delete customer avatar
 *
 * @param {number} id customer identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function deleteAvatar(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return callApi("/v1/customers/delete-avatar/".concat(id), searchQuery);
}
/**
 * Send push notifications
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function sendPush(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return callApi("/v1/customers/send-push-notifications", searchQuery);
}

export var CustomersApi = {
  create: create,
  view: function view(id, searchQuery) {
    return callApi("/v1/customers/".concat(id), searchQuery);
  },
  list: list,
  update: update,
  "delete": deleteModel,
  uploadAvatar: uploadAvatar,
  deleteAvatar: deleteAvatar,
  sendPush: sendPush
};