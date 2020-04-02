"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsRelationsApi = void 0;

var _api = require("./api");

/**
 * Create product relation
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)('/v1/products-relations', searchQuery);
}
/**
 * Get products relations list
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function list(searchQuery) {
  return (0, _api.callApi)("/v1/products-relations", searchQuery);
}
/**
 * Delete product relation
 *
 * @param {number} id product relation identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function deleteModel(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'DELETE'
  }, true);
  return (0, _api.callApi)("/v1/products-relations/".concat(id), searchQuery);
}
/**
 * Get product relation
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function view(id, searchQuery) {
  return (0, _api.callApi)("/v1/products-relations/".concat(id), searchQuery);
}

var ProductsRelationsApi = {
  create: create,
  list: list,
  "delete": deleteModel,
  view: view
};
exports.ProductsRelationsApi = ProductsRelationsApi;