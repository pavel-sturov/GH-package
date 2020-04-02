import "regenerator-runtime/runtime";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(list),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(update),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(view);

import { takeLatest } from 'redux-saga/effects';
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper';
import { CUSTOMER_AUTH_METHOD_ACTIONS } from "./actionTypes";
import { CustomerAuthMethodApi } from "./api";
/**
 * Get customer auth methods
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */

function list(action) {
  return regeneratorRuntime.wrap(function list$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return SagasHelper.defaultList(action, CustomerAuthMethodApi.list);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Update customer auth method
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */


function update(action) {
  return regeneratorRuntime.wrap(function update$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return SagasHelper.defaultUpdate(action, CustomerAuthMethodApi.update);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * View customer auth method
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */


function view(action) {
  return regeneratorRuntime.wrap(function view$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return SagasHelper.defaultView(action, CustomerAuthMethodApi.view);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

export default [takeLatest(CUSTOMER_AUTH_METHOD_ACTIONS.LIST, list), takeLatest(CUSTOMER_AUTH_METHOD_ACTIONS.UPDATE, update), takeLatest(CUSTOMER_AUTH_METHOD_ACTIONS.VIEW, view)];