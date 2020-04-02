"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogsApi = void 0;

var _api = require("./api");

/**
 * Delete log
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
  return (0, _api.callApi)("/v1/logs/".concat(id), searchQuery);
}
/**
 * Delete all logs
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function deleteAll(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'DELETE'
  }, true);
  return (0, _api.callApi)('/v1/logs', searchQuery);
}

var LogsApi = {
  list: function list(searchQuery) {
    return (0, _api.callApi)('/v1/logs', searchQuery);
  },
  view: function view(id, searchQuery) {
    return (0, _api.callApi)("/v1/logs/".concat(id), searchQuery);
  },
  "delete": deleteModel,
  deleteAll: deleteAll
};
exports.LogsApi = LogsApi;