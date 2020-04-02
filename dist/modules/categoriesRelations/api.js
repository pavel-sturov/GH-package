"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoriesRelationsApi = void 0;

var _api = require("./api");

/**
 * Create category relation
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)('/v1/categories-relations', searchQuery);
}
/**
 * Get categories relations list
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function list(searchQuery) {
  return (0, _api.callApi)("/v1/categories-relations", searchQuery);
}
/**
 * Delete product relation
 *
 * @param {number} id category relation identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function deleteModel(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'DELETE'
  }, true);
  return (0, _api.callApi)("/v1/categories-relations/".concat(id), searchQuery);
}

var CategoriesRelationsApi = {
  create: create,
  list: list,
  "delete": deleteModel
};
exports.CategoriesRelationsApi = CategoriesRelationsApi;