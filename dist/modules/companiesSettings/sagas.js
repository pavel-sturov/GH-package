import "regenerator-runtime/runtime";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(view),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(update);

import { takeLatest } from 'redux-saga/effects';
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper';
import { COMPANIES_SETTINGS_ACTIONS } from "./actionTypes";
import { CompaniesSettingsApi } from "./api";
/**
 * View company settings
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{companySetting, type}>|CallEffect|PutEffect<{type}>>}
 */

function view(action) {
  return regeneratorRuntime.wrap(function view$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return SagasHelper.defaultView(action, CompaniesSettingsApi.view);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Update company settings
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{companySetting, type}>|CallEffect|PutEffect<{type}>>}
 */


function update(action) {
  return regeneratorRuntime.wrap(function update$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return SagasHelper.defaultUpdate(action, CompaniesSettingsApi.update);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

export default [takeLatest(COMPANIES_SETTINGS_ACTIONS.VIEW, view), takeLatest(COMPANIES_SETTINGS_ACTIONS.UPDATE, update)];