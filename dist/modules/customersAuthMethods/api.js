"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomerAuthMethodApi = void 0;

var _api = require("./api");

/**
 * Get customer auth methods
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function list(searchQuery) {
  return (0, _api.callApi)('/v1/customers-auth-methods', searchQuery);
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
  return (0, _api.callApi)("/v1/customers-auth-methods/".concat(id), searchQuery);
}

var CustomerAuthMethodApi = {
  list: list,
  update: update,
  view: function view(id, searchQuery) {
    return (0, _api.callApi)("/v1/customers-auth-methods/".concat(id), searchQuery);
  }
};
exports.CustomerAuthMethodApi = CustomerAuthMethodApi;