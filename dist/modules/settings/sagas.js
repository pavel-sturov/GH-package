"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("regenerator-runtime/runtime");

var _effects = require("redux-saga/effects");

var _SagasHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper"));

var _actionCreators = require("./actionCreators");

var _actionSelectors = require("./actionSelectors");

var _actionTypes = require("./actionTypes");

var _api = require("./api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(listAvailable),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(update),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(list),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(view);

/**
 * List available settings
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{settings, type}>|CallEffect|PutEffect<{type}>>}
 */
function listAvailable(action) {
  return regeneratorRuntime.wrap(function listAvailable$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _SagasHelper["default"].defaultView(action, _api.SettingsApi.listAvailable);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Update setting
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{settings, type}>|CallEffect|PutEffect<{type}>>}
 */


function update(action) {
  return regeneratorRuntime.wrap(function update$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _SagasHelper["default"].defaultUpdate(action, _api.SettingsApi.update, null, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
                    return _SagasHelper["default"].afterMergeModels.apply(_SagasHelper["default"], params.concat([_actionSelectors.SettingsStateSelectors.list, _actionCreators.SettingsActions.setList]));

                  case 3:
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
 * Get settings list
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{settings, type}>|CallEffect|PutEffect<{type}>>}
 */


function list(action) {
  return regeneratorRuntime.wrap(function list$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _SagasHelper["default"].defaultList(action, _api.SettingsApi.list);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked3);
}
/**
 * View settings
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{properties, type}>|CallEffect|PutEffect<{type}>>}
 */


function view(action) {
  return regeneratorRuntime.wrap(function view$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _SagasHelper["default"].defaultView(action, _api.SettingsApi.view);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked4);
}

var _default = [(0, _effects.takeLatest)(_actionTypes.SETTINGS_ACTION.LIST_AVAILABLE, listAvailable), (0, _effects.takeLatest)(_actionTypes.SETTINGS_ACTION.UPDATE, update), (0, _effects.takeLatest)(_actionTypes.SETTINGS_ACTION.LIST, list), (0, _effects.takeLatest)(_actionTypes.SETTINGS_ACTION.VIEW, view)];
exports["default"] = _default;