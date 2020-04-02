"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PropertiesApi = void 0;

var _api = require("./api");

/**
 * Get properties list
 *
 * @param {SearchQuery} filter
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function list(searchQuery) {
  return (0, _api.callApi)('/v1/properties', searchQuery);
}
/**
 * Add property
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)('/v1/properties', searchQuery);
}
/**
 * Update property
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
  return (0, _api.callApi)("/v1/properties/".concat(id), searchQuery);
}
/**
 * Get property
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function view(id, searchQuery) {
  return (0, _api.callApi)("/v1/properties/".concat(id), searchQuery);
}
/**
 * Delete property
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
  return (0, _api.callApi)("/v1/properties/".concat(id), searchQuery);
}

var PropertiesApi = {
  view: view,
  list: list,
  create: create,
  update: update,
  "delete": deleteModel
};
exports.PropertiesApi = PropertiesApi;