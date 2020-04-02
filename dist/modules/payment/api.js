"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentApi = void 0;

var _api = require("./api");

var _config = require("config");

/**
 * List payment cards
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function list(searchQuery) {
  searchQuery.addCustomParams({
    externalRequest: true
  }, true);
  return (0, _api.callApi)("".concat(_config.API_PAYMENT, "/v1/payment-method/list"), searchQuery);
}
/**
 * Create payment card
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true).addCustomParams({
    externalRequest: true
  }, true);
  return (0, _api.callApi)("".concat(_config.API_PAYMENT, "/v1/payment-method/save"), searchQuery);
}
/**
 * Send post data after 3D secure done
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function postSecure(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true).addCustomParams({
    externalRequest: true
  }, true);
  return (0, _api.callApi)("".concat(_config.API_PAYMENT, "/v1/payment-method/post-secure"), searchQuery);
}
/**
 * Create payment card with redirect
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function createWithRedirect(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true).addCustomParams({
    externalRequest: true
  }, true);
  return (0, _api.callApi)("".concat(_config.API_PAYMENT, "/v1/payment-method/add"), searchQuery);
}
/**
 * Set primary payment card
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function setMain(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true).addCustomParams({
    externalRequest: true
  }, true);
  return (0, _api.callApi)("".concat(_config.API_PAYMENT, "/v1/payment-method/set-main"), searchQuery);
}
/**
 * Delete payment card
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function deleteCard(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'DELETE'
  }, true).addCustomParams({
    externalRequest: true
  }, true);
  return (0, _api.callApi)("".concat(_config.API_PAYMENT, "/v1/payment-method/remove/").concat(id), searchQuery);
}

var PaymentApi = {
  list: list,
  create: create,
  postSecure: postSecure,
  createWithRedirect: createWithRedirect,
  setMain: setMain,
  "delete": deleteCard
};
exports.PaymentApi = PaymentApi;