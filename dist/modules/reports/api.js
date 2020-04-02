import { callApi } from "./api";
/**
 * Get report info
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */

function view(searchQuery) {
  return callApi('/v1/reports/list', searchQuery);
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
  return callApi("/v1/reports/generate", searchQuery);
}

export var ReportsApi = {
  view: view,
  generate: generate
};