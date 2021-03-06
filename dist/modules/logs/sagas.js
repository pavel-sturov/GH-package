import "regenerator-runtime/runtime";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(list),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(view),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(deleteModel),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(deleteAll);

import { takeLatest } from 'redux-saga/effects';
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper';
import { LogsActions } from "./actionCreators";
import { LogsStateSelectors } from "./actionSelectors";
import { LOGS_ACTION } from "./actionTypes";
import { LogsApi } from "./api";
/**
 * Get companies list
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{log, type}>|CallEffect|PutEffect<{type}>>}
 */

function list(action) {
  return regeneratorRuntime.wrap(function list$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return SagasHelper.defaultList(action, LogsApi.list);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * View company
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{log, type}>|CallEffect|PutEffect<{type}>>}
 */


function view(action) {
  return regeneratorRuntime.wrap(function view$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return SagasHelper.defaultView(action, LogsApi.view);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * Delete company
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{log, type}>|CallEffect|PutEffect<{type}>>}
 */


function deleteModel(action) {
  return regeneratorRuntime.wrap(function deleteModel$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return SagasHelper.defaultDelete(action, LogsApi["delete"], null, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _len,
                params,
                _key,
                _args3 = arguments;

            return regeneratorRuntime.wrap(function _callee$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    for (_len = _args3.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
                      params[_key] = _args3[_key];
                    }

                    _context3.next = 3;
                    return SagasHelper.afterDeleteModelFromList.apply(SagasHelper, params.concat([LogsStateSelectors.list, LogsActions.setList]));

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee);
          }));

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked3);
}
/**
 * Delete all favorites
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{log, type}>|CallEffect|PutEffect<{type}>>}
 */


function deleteAll(action) {
  return regeneratorRuntime.wrap(function deleteAll$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return SagasHelper.defaultDeleteAll(action, LogsApi.deleteAll, null, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _len2,
                params,
                _key2,
                _args5 = arguments;

            return regeneratorRuntime.wrap(function _callee2$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    for (_len2 = _args5.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                      params[_key2] = _args5[_key2];
                    }

                    _context5.next = 3;
                    return SagasHelper.afterClearState.apply(SagasHelper, params.concat([LogsActions.list]));

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee2);
          }));

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked4);
}

export default [takeLatest(LOGS_ACTION.LIST, list), takeLatest(LOGS_ACTION.VIEW, view), takeLatest(LOGS_ACTION.DELETE, deleteModel), takeLatest(LOGS_ACTION.DELETE_ALL, deleteAll)];