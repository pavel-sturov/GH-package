"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagZoneApi = void 0;

var _api = require("../../../api");

/**
 * Add tag zone
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)('/store-v1/tags-zones', searchQuery);
}
/**
 * Delete tag zone
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
  return (0, _api.callApi)("/store-v1/tags-zones/".concat(id), searchQuery);
}
/**
 * Update tag zone
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
  return (0, _api.callApi)("/store-v1/tags-zones/".concat(id), searchQuery);
}
/**
 * Tags moving clear zones
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function clearZones(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)('/store-v1/tags-moving/clear-zones', searchQuery);
}

var TagZoneApi = {
  list: function list(searchQuery) {
    return (0, _api.callApi)('/store-v1/tags-zones', searchQuery);
  },
  create: create,
  view: function view(id, searchQuery) {
    return (0, _api.callApi)("/store-v1/tags-zones/".concat(id), searchQuery);
  },
  "delete": deleteModel,
  update: update,
  clearZones: clearZones
};
exports.TagZoneApi = TagZoneApi;