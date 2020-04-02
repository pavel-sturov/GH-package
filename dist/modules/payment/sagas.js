import "regenerator-runtime/runtime";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(list),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(create),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(postSecure),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(deleteCard),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(setMain);

import { put, takeLatest } from 'redux-saga/effects';
import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider';
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper';
import { DispatchSelector } from "../selectors";
import { PAYMENT_ACTION } from "./actionTypes";
import { PaymentApi } from "./api";
/**
 * List payment cards
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */

function list(action) {
  return regeneratorRuntime.wrap(function list$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return SagasHelper.defaultList(action, PaymentApi.list);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Create payment card
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */


function create(action) {
  return regeneratorRuntime.wrap(function create$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return SagasHelper.defaultCreate(action, PaymentApi.create);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * Send post data after 3D secure done
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */


function postSecure(action) {
  return regeneratorRuntime.wrap(function postSecure$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return SagasHelper.defaultCustom(action, PaymentApi.postSecure);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Delete payment card
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */


function deleteCard(action) {
  var setCardlist;
  return regeneratorRuntime.wrap(function deleteCard$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          setCardlist = DispatchSelector.payment.setList;
          _context5.next = 3;
          return SagasHelper.defaultDelete(action, PaymentApi["delete"], null, /*#__PURE__*/regeneratorRuntime.mark(function _callee(response, searchQuery) {
            return regeneratorRuntime.wrap(function _callee$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return put(setCardlist(DataProvider.handleResponseList(response), searchQuery));

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee);
          }));

        case 3:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked4);
}
/**
 * Set primary payment card
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */


function setMain(action) {
  var setCardlist;
  return regeneratorRuntime.wrap(function setMain$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          setCardlist = DispatchSelector.payment.setList;
          _context7.next = 3;
          return SagasHelper.defaultCustom(action, PaymentApi.setMain, null, /*#__PURE__*/regeneratorRuntime.mark(function _callee2(response, searchQuery) {
            return regeneratorRuntime.wrap(function _callee2$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return put(setCardlist(DataProvider.handleResponseList(response), searchQuery));

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee2);
          }));

        case 3:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked5);
}

export default [takeLatest(PAYMENT_ACTION.LIST, list), takeLatest(PAYMENT_ACTION.CREATE, create), takeLatest(PAYMENT_ACTION.POST_SECURE, postSecure), takeLatest(PAYMENT_ACTION.DELETE, deleteCard), takeLatest(PAYMENT_ACTION.SET_MAIN, setMain)];