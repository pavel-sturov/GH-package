"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoriesApi = void 0;

var _api = require("./api");

/**
 * Get list categories
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function list(searchQuery) {
  return (0, _api.callApi)('/v1/categories', searchQuery);
}
/**
 * Create category
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)('/v1/categories', searchQuery);
}
/**
 * Update category
 *
 * @param {number} id category identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function update(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'PATCH'
  }, true);
  return (0, _api.callApi)("/v1/categories/".concat(id), searchQuery);
}
/**
 * Delete category
 *
 * @param {number} id category identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function deleteModel(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'DELETE'
  }, true);
  return (0, _api.callApi)("/v1/categories/".concat(id), searchQuery);
}

var CategoriesApi = {
  list: list,
  create: create,
  update: update,
  "delete": deleteModel,
  view: function view(id, searchQuery) {
    return (0, _api.callApi)("/v1/categories/".concat(id), searchQuery);
  },
  fetchHierarchicalCategories: function fetchHierarchicalCategories(searchQuery) {
    return (0, _api.callApi)('/v1/categories/hierarchical', searchQuery);
  },
  popularCategories: function popularCategories(searchQuery) {
    return (0, _api.callApi)("/v1/categories/popular", searchQuery);
  },
  filters: function filters(id, searchQuery) {
    return (0, _api.callApi)("/v1/categories/filters/".concat(id), searchQuery);
  }
};
exports.CategoriesApi = CategoriesApi;