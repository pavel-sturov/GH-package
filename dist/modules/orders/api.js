import { callApi } from "./api";
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
  return callApi("/v1/orders/pay/".concat(id), searchQuery);
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
  return callApi("/v1/orders/finish-by-product", searchQuery);
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
  return callApi("/v1/orders/cancel-by-product", searchQuery);
}

export var OrdersApi = {
  view: function view(id, searchQuery) {
    return callApi("/v1/orders/".concat(id), searchQuery);
  },
  list: function list(searchQuery) {
    return callApi('/v1/orders', searchQuery);
  },
  pay: pay,
  finishByProduct: finishByProduct,
  cancelByProduct: cancelByProduct
};