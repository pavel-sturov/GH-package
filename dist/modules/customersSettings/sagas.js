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
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(update);

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
          return _SagasHelper["default"].defaultView(action, _api.CustomersSettingsApi.view);

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
          return _SagasHelper["default"].defaultUpdate(action, _api.CustomersSettingsApi.update);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

var _default = [(0, _effects.takeLatest)(_actionTypes.CUSTOMER_SETTINGS_ACTIONS.VIEW, view), (0, _effects.takeLatest)(_actionTypes.CUSTOMER_SETTINGS_ACTIONS.UPDATE, update)];
exports["default"] = _default;