"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomerAddressesApi = void 0;

var _api = require("./api");

/**
 * Get customer adresses
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function list(searchQuery) {
  return (0, _api.callApi)('/v1/customers-addresses', searchQuery);
}
/**
 * Add customer address
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)('/v1/customers-addresses', searchQuery);
}
/**
 * Delete customer address
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
  return (0, _api.callApi)("/v1/customers-addresses/".concat(id), searchQuery);
}
/**
 * Update address
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
  return (0, _api.callApi)("/v1/customers-addresses/".concat(id), searchQuery);
}

var CustomerAddressesApi = {
  list: list,
  create: create,
  view: function view(id, searchQuery) {
    return (0, _api.callApi)("/v1/customers-addresses/".concat(id), searchQuery);
  },
  "delete": deleteModel,
  update: update
};
exports.CustomerAddressesApi = CustomerAddressesApi;