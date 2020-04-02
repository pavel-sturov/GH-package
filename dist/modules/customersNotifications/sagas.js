import "regenerator-runtime/runtime";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(list),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(update),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(view);

import { takeLatest } from 'redux-saga/effects';
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper';
import { CustomerNotificationsActions } from "./actionCreators";
import { CustomerNotificationsSelectors } from "./actionSelectors";
import { NOTIFICATIONS_ACTIONS } from "./actionTypes";
import { CustomerNotificationsApi } from "./api";
/**
 * Get customer notifications
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
          return SagasHelper.defaultList(action, CustomerNotificationsApi.list);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Update customer notification
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */


function update(action) {
  return regeneratorRuntime.wrap(function update$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return SagasHelper.defaultUpdate(action, CustomerNotificationsApi.update, null, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _len,
                params,
                _key,
                _args2 = arguments;

            return regeneratorRuntime.wrap(function _callee$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    for (_len = _args2.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
                      params[_key] = _args2[_key];
                    }

                    _context2.next = 3;
                    return SagasHelper.afterMergeModels.apply(SagasHelper, params.concat([CustomerNotificationsSelectors.list, CustomerNotificationsActions.setList]));

                  case 3:
                    _context2.next = 5;
                    return SagasHelper.afterMergeModels.apply(SagasHelper, params.concat([CustomerNotificationsSelectors.smartList, CustomerNotificationsActions.setSmartList]));

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee);
          }));

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked2);
}
/**
 * View customer notification
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */


function view(action) {
  return regeneratorRuntime.wrap(function view$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return SagasHelper.defaultView(action, CustomerNotificationsApi.view);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked3);
}

export default [takeLatest(NOTIFICATIONS_ACTIONS.LIST, list), takeLatest(NOTIFICATIONS_ACTIONS.SMART_LIST, list), takeLatest(NOTIFICATIONS_ACTIONS.VIEW, view), takeLatest(NOTIFICATIONS_ACTIONS.UPDATE, update)];