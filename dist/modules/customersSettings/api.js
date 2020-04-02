import { callApi } from "./api";
/**
 * Update customer settings
 *
 * @param {number} id customer identity
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */

function update(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'PATCH'
  }, true);
  return callApi("/v1/customers-settings/".concat(id), searchQuery);
}

export var CustomersSettingsApi = {
  view: function view(id, searchQuery) {
    return callApi("/v1/customers-settings/".concat(id), searchQuery);
  },
  update: update
};