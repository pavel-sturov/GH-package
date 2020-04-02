import { callApi } from "./api";
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
  return callApi('/v1/faq-questions', searchQuery);
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
  return callApi("/v1/faq-questions/".concat(id), searchQuery);
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
  return callApi("/v1/faq-questions/".concat(id), searchQuery);
}

export var FaqQuestionApi = {
  list: function list(searchQuery) {
    return callApi('/v1/faq-questions', searchQuery);
  },
  create: create,
  view: function view(id, searchQuery) {
    return callApi("/v1/faq-questions/".concat(id), searchQuery);
  },
  "delete": deleteModel,
  update: update
};