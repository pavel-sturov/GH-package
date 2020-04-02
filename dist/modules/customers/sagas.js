import "regenerator-runtime/runtime";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(create),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(view),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(list),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(update),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(deleteModel),
    _marked6 = /*#__PURE__*/regeneratorRuntime.mark(sendPush);

import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper';
import { takeLatest } from 'redux-saga/effects';
import { CUSTOMER_ACTIONS } from "./actionTypes";
import { CustomersApi } from "./api";
/**
 * Create customer
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{customers, type}>|CallEffect|PutEffect<{type}>>}
 */

function create(action) {
  return regeneratorRuntime.wrap(function create$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return SagasHelper.defaultCreate(action, CustomersApi.create);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * View customer
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{customers, type}>|CallEffect|PutEffect<{type}>>}
 */


function view(action) {
  return regeneratorRuntime.wrap(function view$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return SagasHelper.defaultView(action, CustomersApi.view);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * List customers
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{customers, type}>|CallEffect|PutEffect<{type}>>}
 */


function list(action) {
  return regeneratorRuntime.wrap(function list$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return SagasHelper.defaultList(action, CustomersApi.list);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Update customer
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{customers, type}>|CallEffect|PutEffect<{type}>>}
 */


function update(action) {
  return regeneratorRuntime.wrap(function update$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return SagasHelper.defaultUpdate(action, CustomersApi.update);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
/**
 * Delete customer
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{customers, type}>|CallEffect|PutEffect<{type}>>}
 */


function deleteModel(action) {
  return regeneratorRuntime.wrap(function deleteModel$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return SagasHelper.defaultDelete(action, CustomersApi["delete"]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}
/**
 * Send push notification
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{customers, type}>|CallEffect|PutEffect<{type}>>}
 */


function sendPush(action) {
  return regeneratorRuntime.wrap(function sendPush$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return SagasHelper.defaultCreate(action, CustomersApi.sendPush);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

export default [takeLatest(CUSTOMER_ACTIONS.CREATE, create), takeLatest(CUSTOMER_ACTIONS.VIEW, view), takeLatest(CUSTOMER_ACTIONS.LIST, list), takeLatest(CUSTOMER_ACTIONS.UPDATE, update), takeLatest(CUSTOMER_ACTIONS.DELETE, deleteModel), takeLatest(CUSTOMER_ACTIONS.SEND_PUSH, sendPush)];