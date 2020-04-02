"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomerNotificationsApi = void 0;

var _api = require("./api");

/**
 * Get customer notifications
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function list(searchQuery) {
  return (0, _api.callApi)('/v1/customers-notifications', searchQuery);
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
  return (0, _api.callApi)("/v1/customers-notifications/".concat(id), searchQuery);
}

var CustomerNotificationsApi = {
  list: list,
  update: update,
  view: function view(id, searchQuery) {
    return (0, _api.callApi)("/v1/customers-notifications/".concat(id), searchQuery);
  }
};
exports.CustomerNotificationsApi = CustomerNotificationsApi;