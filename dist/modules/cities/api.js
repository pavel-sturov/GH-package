"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CitiesApi = void 0;

var _api = require("./api");

/**
 * Create city
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)('/v1/cities', searchQuery);
}
/**
 * Update city
 *
 * @param {number} id city identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function update(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'PATCH'
  }, true);
  return (0, _api.callApi)("/v1/cities/".concat(id), searchQuery);
}

var CitiesApi = {
  create: create,
  update: update,
  defaultCity: function defaultCity(searchQuery) {
    return (0, _api.callApi)('/v1/cities/default', searchQuery);
  },
  list: function list(searchQuery) {
    return (0, _api.callApi)('/v1/cities', searchQuery);
  },
  view: function view(id, searchQuery) {
    return (0, _api.callApi)("/v1/cities/".concat(id), searchQuery);
  }
};
exports.CitiesApi = CitiesApi;