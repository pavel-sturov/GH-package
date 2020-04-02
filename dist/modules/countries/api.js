"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CountriesApi = void 0;

var _api = require("./api");

/**
 * Create country
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)('/v1/countries', searchQuery);
}
/**
 * Update country
 *
 * @param {number} id country identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function update(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'PATCH'
  }, true);
  return (0, _api.callApi)("/v1/countries/".concat(id), searchQuery);
}

var CountriesApi = {
  create: create,
  update: update,
  list: function list(searchQuery) {
    return (0, _api.callApi)('/v1/countries', searchQuery);
  },
  view: function view(id, searchQuery) {
    return (0, _api.callApi)("/v1/countries/".concat(id), searchQuery);
  }
};
exports.CountriesApi = CountriesApi;