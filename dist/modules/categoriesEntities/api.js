"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoriesEntitiesApi = void 0;

var _api = require("../../api");

/**
 * Get categories entities list
 *
 * @param {SearchQuery} filter
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function list(searchQuery) {
  return (0, _api.callApi)('/v1/categories-entities', searchQuery);
}
/**
 * Add category entity
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)('/v1/categories-entities', searchQuery);
}
/**
 * Delete category entity
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
  return (0, _api.callApi)("/v1/categories-entities/".concat(id), searchQuery);
}

var CategoriesEntitiesApi = {
  list: list,
  create: create,
  "delete": deleteModel
};
exports.CategoriesEntitiesApi = CategoriesEntitiesApi;