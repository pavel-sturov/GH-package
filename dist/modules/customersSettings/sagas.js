import "regenerator-runtime/runtime";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(view),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(update);

import { takeLatest } from 'redux-saga/effects';
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper';
import { CUSTOMER_SETTINGS_ACTIONS } from "./actionTypes";
import { CustomersSettingsApi } from "./api";
/**
 * View customer settings
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */

function view(action) {
  return regeneratorRuntime.wrap(function view$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return SagasHelper.defaultView(action, CustomersSettingsApi.view);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Update customer settings
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */


function update(action) {
  return regeneratorRuntime.wrap(function update$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return SagasHelper.defaultUpdate(action, CustomersSettingsApi.update);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

export default [takeLatest(CUSTOMER_SETTINGS_ACTIONS.VIEW, view), takeLatest(CUSTOMER_SETTINGS_ACTIONS.UPDATE, update)];