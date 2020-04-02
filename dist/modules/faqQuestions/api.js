"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FaqQuestionApi = void 0;

var _api = require("./api");

/**
 * Add faq question
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)('/v1/faq-questions', searchQuery);
}
/**
 * Delete faq question
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
  return (0, _api.callApi)("/v1/faq-questions/".concat(id), searchQuery);
}
/**
 * Update faq question
 *
 * @param {number} id faq question
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function update(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'PATCH'
  }, true);
  return (0, _api.callApi)("/v1/faq-questions/".concat(id), searchQuery);
}

var FaqQuestionApi = {
  list: function list(searchQuery) {
    return (0, _api.callApi)('/v1/faq-questions', searchQuery);
  },
  create: create,
  view: function view(id, searchQuery) {
    return (0, _api.callApi)("/v1/faq-questions/".concat(id), searchQuery);
  },
  "delete": deleteModel,
  update: update
};
exports.FaqQuestionApi = FaqQuestionApi;