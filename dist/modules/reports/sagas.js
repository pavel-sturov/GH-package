import "regenerator-runtime/runtime";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(view),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(generate);

import { takeLatest } from 'redux-saga/effects';
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper';
import { REPORTS_ACTIONS } from "./actionTypes";
import { ReportsApi } from "./api";
/**
 * Report info
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{report, type}>|CallEffect|PutEffect<{type}>>}
 */

function view(action) {
  return regeneratorRuntime.wrap(function view$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return SagasHelper.defaultView(action, ReportsApi.view);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Generate report
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{report, type}>|CallEffect|PutEffect<{type}>>}
 */


function generate(action) {
  return regeneratorRuntime.wrap(function generate$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return SagasHelper.defaultCreate(action, ReportsApi.generate);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

export default [takeLatest(REPORTS_ACTIONS.VIEW, view), takeLatest(REPORTS_ACTIONS.GENERATE, generate)];