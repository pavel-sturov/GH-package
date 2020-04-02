"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersApi = void 0;

var _api = require("./api");

/**
 * Pay for order
 *
 * @param {number} id
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function pay(id, searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)("/v1/orders/pay/".concat(id), searchQuery);
}
/**
 * Finish by product
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function finishByProduct(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)("/v1/orders/finish-by-product", searchQuery);
}
/**
 * Cancel by product
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function cancelByProduct(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)("/v1/orders/cancel-by-product", searchQuery);
}

var OrdersApi = {
  view: function view(id, searchQuery) {
    return (0, _api.callApi)("/v1/orders/".concat(id), searchQuery);
  },
  list: function list(searchQuery) {
    return (0, _api.callApi)('/v1/orders', searchQuery);
  },
  pay: pay,
  finishByProduct: finishByProduct,
  cancelByProduct: cancelByProduct
};
exports.OrdersApi = OrdersApi;