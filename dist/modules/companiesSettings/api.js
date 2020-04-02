import { callApi } from "./api";
/**
 * Update company settings
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
  return callApi("/v1/companies-settings/".concat(id), searchQuery);
}

export var CompaniesSettingsApi = {
  view: function view(id, searchQuery) {
    return callApi("/v1/companies-settings/".concat(id), searchQuery);
  },
  update: update
};