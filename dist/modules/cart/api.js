"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartApi = void 0;

var _api = require("../../api");

var _SearchQuery = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/DataProvider/SearchQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Get cart products
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function list(searchQuery) {
  return (0, _api.callApi)('/v1/cart', searchQuery);
}
/**
 * Add product to cart
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function create(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)('/v1/cart', searchQuery);
}
/**
 * Update cart product
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
  return (0, _api.callApi)("/v1/cart/".concat(id), searchQuery);
}
/**
 * Delete cart product
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
  return (0, _api.callApi)("/v1/cart/".concat(id), searchQuery);
}
/**
 * Delete all cart product
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function deleteAll(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'DELETE'
  }, true);
  return (0, _api.callApi)('/v1/cart', searchQuery);
}
/**
 * Cart get checkout info
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function checkout(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)('/v1/cart/checkout', searchQuery);
}
/**
 * Cart get checkout info for terminal
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function checkoutTerminal(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)('/v1/cart/checkout-terminal', searchQuery);
}
/**
 * Create order
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function createOrder(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)('/v1/cart/create-order', searchQuery);
}
/**
 * Create order terminal
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function createOrderTerminal(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)('/v1/cart/create-order-terminal', searchQuery);
}
/**
 * Start session terminal
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function startSessionTerminal(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)('/v1/cart/start-session-terminal', searchQuery);
}

var CartApi = {
  list: list,
  create: create,
  update: update,
  view: function view(id, searchQuery) {
    return (0, _api.callApi)("/v1/cart/".concat(id), searchQuery);
  },
  deleteModel: deleteModel,
  deleteAll: deleteAll,
  checkout: checkout,
  checkoutTerminal: checkoutTerminal,
  createOrder: createOrder,
  createOrderTerminal: createOrderTerminal,
  startSessionTerminal: startSessionTerminal
};
exports.CartApi = CartApi;