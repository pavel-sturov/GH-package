"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomersSettingsApi = void 0;

var _api = require("./api");

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
  return (0, _api.callApi)("/v1/customers-settings/".concat(id), searchQuery);
}

var CustomersSettingsApi = {
  view: function view(id, searchQuery) {
    return (0, _api.callApi)("/v1/customers-settings/".concat(id), searchQuery);
  },
  update: update
};
exports.CustomersSettingsApi = CustomersSettingsApi;