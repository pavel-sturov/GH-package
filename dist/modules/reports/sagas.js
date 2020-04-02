"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("regenerator-runtime/runtime");

var _effects = require("redux-saga/effects");

var _SagasHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper"));

var _actionTypes = require("./actionTypes");

var _api = require("./api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(view),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(generate);

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
          return _SagasHelper["default"].defaultView(action, _api.ReportsApi.view);

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
          return _SagasHelper["default"].defaultCreate(action, _api.ReportsApi.generate);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

var _default = [(0, _effects.takeLatest)(_actionTypes.REPORTS_ACTIONS.VIEW, view), (0, _effects.takeLatest)(_actionTypes.REPORTS_ACTIONS.GENERATE, generate)];
exports["default"] = _default;