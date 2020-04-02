"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PropertiesEntitiesApi = void 0;

var _api = require("./api");

/**
 * Get properties entities list
 *
 * @param {SearchQuery} filter
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function list(searchQuery) {
  return (0, _api.callApi)('/v1/properties-entities', searchQuery);
}
/**
 * Add property entity
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)('/v1/properties-entities', searchQuery);
}
/**
 * Update property entity
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
  return (0, _api.callApi)("/v1/properties-entities/".concat(id), searchQuery);
}
/**
 * Get property entity
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function view(id, searchQuery) {
  return (0, _api.callApi)("/v1/properties-entities/".concat(id), searchQuery);
}
/**
 * Delete property entity
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
  return (0, _api.callApi)("/v1/properties-entities/".concat(id), searchQuery);
}

var PropertiesEntitiesApi = {
  view: view,
  list: list,
  create: create,
  update: update,
  "delete": deleteModel
};
exports.PropertiesEntitiesApi = PropertiesEntitiesApi;