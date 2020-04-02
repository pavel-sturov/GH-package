"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompaniesInventoryApi = void 0;

var _api = require("./api");

/**
 * Get inventory info
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function view(id, searchQuery) {
  return (0, _api.callApi)("/v1/companies/inventory/".concat(id), searchQuery);
}
/**
 * Get products
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function products(searchQuery) {
  return (0, _api.callApi)('/v1/companies-inventory-products', searchQuery);
}

var CompaniesInventoryApi = {
  view: view,
  products: products
};
exports.CompaniesInventoryApi = CompaniesInventoryApi;