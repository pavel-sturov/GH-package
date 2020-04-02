"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsBarcodesApi = void 0;

var _api = require("./api");

/**
 * Create product barcode
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)('/v1/products-barcodes', searchQuery);
}
/**
 * Get products barcodes list
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function list(searchQuery) {
  return (0, _api.callApi)("/v1/products-barcodes", searchQuery);
}
/**
 * Update product barcode
 *
 * @param {number} id product identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function update(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'PATCH'
  }, true);
  return (0, _api.callApi)("/v1/products-barcodes/".concat(id), searchQuery);
}
/**
 * Delete product barcode
 *
 * @param {number} id product identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function deleteModel(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'DELETE'
  }, true);
  return (0, _api.callApi)("/v1/products-barcodes/".concat(id), searchQuery);
}

var ProductsBarcodesApi = {
  create: create,
  list: list,
  update: update,
  "delete": deleteModel
};
exports.ProductsBarcodesApi = ProductsBarcodesApi;