"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsAttachmentsApi = void 0;

var _api = require("./api");

/**
 * Create products attachment
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)('/v1/products-attachments', searchQuery);
}
/**
 * Get products attachments list
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function list(searchQuery) {
  return (0, _api.callApi)("/v1/products-attachments", searchQuery);
}
/**
 * Update products attachment
 *
 * @param {number} id product attachment identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function update(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'PATCH'
  }, true);
  return (0, _api.callApi)("/v1/products-attachments/".concat(id), searchQuery);
}
/**
 * Delete products attachment
 *
 * @param {number} id product attachment identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function deleteModel(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'DELETE'
  }, true);
  return (0, _api.callApi)("/v1/products-attachments/".concat(id), searchQuery);
}
/**
 * Get products attachment
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function view(id, searchQuery) {
  return (0, _api.callApi)("/v1/products-attachments/".concat(id), searchQuery);
}

var ProductsAttachmentsApi = {
  create: create,
  list: list,
  update: update,
  "delete": deleteModel,
  view: view
};
exports.ProductsAttachmentsApi = ProductsAttachmentsApi;