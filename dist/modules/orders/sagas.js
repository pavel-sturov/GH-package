import "regenerator-runtime/runtime";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(list),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(view),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(pay),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(finishByProduct),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(cancelByProduct);

import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper';
import { takeLatest } from 'redux-saga/effects';
import { ORDERS_ACTION } from "./actionTypes";
import { OrdersApi } from "./api";
/**
 * List orders
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{orders, type}>|CallEffect|PutEffect<{type}>>}
 */

function list(action) {
  return regeneratorRuntime.wrap(function list$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return SagasHelper.defaultList(action, OrdersApi.list);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * View order
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{orders, type}>|CallEffect|PutEffect<{type}>>}
 */


function view(action) {
  return regeneratorRuntime.wrap(function view$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return SagasHelper.defaultView(action, OrdersApi.view);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * Pay for order
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{orders, type}>|CallEffect|PutEffect<{type}>>}
 */


function pay(action) {
  return regeneratorRuntime.wrap(function pay$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return SagasHelper.defaultView(action, OrdersApi.pay);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Finish by product
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{orders, type}>|CallEffect|PutEffect<{type}>>}
 */


function finishByProduct(action) {
  return regeneratorRuntime.wrap(function finishByProduct$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return SagasHelper.defaultCreate(action, OrdersApi.finishByProduct);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
/**
 * Finish by product
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{orders, type}>|CallEffect|PutEffect<{type}>>}
 */


function cancelByProduct(action) {
  return regeneratorRuntime.wrap(function cancelByProduct$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return SagasHelper.defaultCreate(action, OrdersApi.cancelByProduct);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

export default [takeLatest(ORDERS_ACTION.LIST, list), takeLatest(ORDERS_ACTION.VIEW, view), takeLatest(ORDERS_ACTION.PAY, pay), takeLatest(ORDERS_ACTION.FINISH_BY_PRODUCT, finishByProduct), takeLatest(ORDERS_ACTION.CANCEL_BY_PRODUCT, cancelByProduct)];