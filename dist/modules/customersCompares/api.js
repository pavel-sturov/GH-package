"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomerCompareApi = void 0;

var _api = require("./api");

/**
 * Add customer compare
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)('/v1/customers-compares', searchQuery);
}
/**
 * Delete customer compare
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
  return (0, _api.callApi)("/v1/customers-compares/".concat(id), searchQuery);
}
/**
 * Delete all compares
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function deleteAll(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'DELETE'
  }, true);
  return (0, _api.callApi)('/v1/customers-compares', searchQuery);
}

var CustomerCompareApi = {
  list: function list(searchQuery) {
    return (0, _api.callApi)('/v1/customers-compares', searchQuery);
  },
  create: create,
  view: function view(id, searchQuery) {
    return (0, _api.callApi)("/v1/customers-compares/".concat(id), searchQuery);
  },
  "delete": deleteModel,
  deleteAll: deleteAll,
  hierarchical: function hierarchical(searchQuery) {
    return (0, _api.callApi)('/v1/customers-compares/hierarchical', searchQuery);
  },
  products: function products(searchQuery) {
    return (0, _api.callApi)('/v1/customers-compares/products', searchQuery);
  }
};
exports.CustomerCompareApi = CustomerCompareApi;