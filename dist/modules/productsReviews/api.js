import { callApi } from "./api";
import SearchQuery from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider/SearchQuery';
/**
 * Get products reviews list
 *
 * @param {SearchQuery} filter
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */

function list(searchQuery) {
  return callApi('/v1/products-reviews', searchQuery);
}
/**
 * Add product review
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return callApi('/v1/products-reviews', searchQuery);
}
/**
 * Update product review
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
  return callApi("/v1/products-reviews/".concat(id), searchQuery);
}
/**
 * Get product review
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function view(id, searchQuery) {
  return callApi("/v1/products-reviews/".concat(id), searchQuery);
}

export var ProductsReviewsApi = {
  view: view,
  list: list,
  create: create,
  update: update
};