"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsApi = void 0;

var _api = require("./api");

/**
 * Update setting
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function update(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'PATCH'
  }, true).addBody({
    name: id
  }, true);
  return (0, _api.callApi)('/v1/settings', searchQuery);
}
/**
 * Get settings list
 *
 * @param {SearchQuery} filter
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function list(searchQuery) {
  return (0, _api.callApi)('/v1/settings', searchQuery);
}
/**
 * Get settings
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function view(id, searchQuery) {
  return (0, _api.callApi)("/v1/settings/view?id=".concat(id), searchQuery);
}

var SettingsApi = {
  listAvailable: function listAvailable(searchQuery) {
    return (0, _api.callApi)('/v1/settings/list', searchQuery);
  },
  update: update,
  list: list,
  view: view
};
exports.SettingsApi = SettingsApi;