import "regenerator-runtime/runtime";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(list),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(create),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(view),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(deleteModel),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(deleteAll);

import { takeLatest } from 'redux-saga/effects';
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper';
import { beforeAddCustomerId } from 'helpers/Redux/SagasHelper';
import { CustomerFavorite } from 'models/Customers/CustomerFavorite';
import { CustomerFavoriteActions } from "./actionCreators";
import { CustomerFavoriteSelectors } from "./actionSelectors";
import { FAVORITE_ACTION } from "./actionTypes";
import { CustomerFavoriteApi } from "./api";
/**
 * Get customer favorites
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
          return SagasHelper.defaultList(action, CustomerFavoriteApi.list);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Add customer favorite
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */


function create(action) {
  return regeneratorRuntime.wrap(function create$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return SagasHelper.defaultCreate(action, CustomerFavoriteApi.create, beforeAddCustomerId);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * View customer favorite
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
          return SagasHelper.defaultView(action, CustomerFavoriteApi.view);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Delete customer favorite
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */


function deleteModel(action) {
  return regeneratorRuntime.wrap(function deleteModel$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return SagasHelper.defaultDelete(action, CustomerFavoriteApi["delete"], null, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _len,
                params,
                _key,
                _args4 = arguments;

            return regeneratorRuntime.wrap(function _callee$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    for (_len = _args4.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
                      params[_key] = _args4[_key];
                    }

                    _context4.next = 3;
                    return SagasHelper.afterDeleteModelFromList.apply(SagasHelper, params.concat([CustomerFavoriteSelectors.list, CustomerFavoriteActions.setList, CustomerFavorite]));

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee);
          }));

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked4);
}
/**
 * Delete all favorites
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */


function deleteAll(action) {
  return regeneratorRuntime.wrap(function deleteAll$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return SagasHelper.defaultDeleteAll(action, CustomerFavoriteApi.deleteAll, null, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _len2,
                params,
                _key2,
                _args6 = arguments;

            return regeneratorRuntime.wrap(function _callee2$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    for (_len2 = _args6.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                      params[_key2] = _args6[_key2];
                    }

                    _context6.next = 3;
                    return SagasHelper.afterClearState.apply(SagasHelper, params.concat([CustomerFavoriteActions.list]));

                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee2);
          }));

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked5);
}

export default [takeLatest(FAVORITE_ACTION.LIST, list), takeLatest(FAVORITE_ACTION.CREATE, create), takeLatest(FAVORITE_ACTION.VIEW, view), takeLatest(FAVORITE_ACTION.DELETE, deleteModel), takeLatest(FAVORITE_ACTION.DELETE_ALL, deleteAll)];