"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompaniesOffersApi = void 0;

var _api = require("./api");

/**
 * Create company offer
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)('/v1/companies-offers', searchQuery);
}
/**
 * Update company offer
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
  return (0, _api.callApi)("/v1/companies-offers/".concat(id), searchQuery);
}
/**
 * Delete company offer
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
  return (0, _api.callApi)("/v1/companies-offers/".concat(id), searchQuery);
}

var CompaniesOffersApi = {
  list: function list(searchQuery) {
    return (0, _api.callApi)('/v1/companies-offers', searchQuery);
  },
  create: create,
  view: function view(id, searchQuery) {
    return (0, _api.callApi)("/v1/companies-offers/".concat(id), searchQuery);
  },
  update: update,
  "delete": deleteModel
};
exports.CompaniesOffersApi = CompaniesOffersApi;