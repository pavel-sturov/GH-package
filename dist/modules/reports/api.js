"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportsApi = void 0;

var _api = require("./api");

/**
 * Get report info
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function view(searchQuery) {
  return (0, _api.callApi)('/v1/reports/list', searchQuery);
}
/**
 * Generate report
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function generate(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)("/v1/reports/generate", searchQuery);
}

var ReportsApi = {
  view: view,
  generate: generate
};
exports.ReportsApi = ReportsApi;