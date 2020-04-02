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

var _marked = /*#__PURE__*/regeneratorRuntime.mark(list),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(update),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(view);

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
          return _SagasHelper["default"].defaultList(action, _api.CustomerNotificationsApi.list);

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
          return _SagasHelper["default"].defaultUpdate(action, _api.CustomerNotificationsApi.update, null, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
                    return _SagasHelper["default"].afterMergeModels.apply(_SagasHelper["default"], params.concat([_actionSelectors.CustomerNotificationsSelectors.list, _actionCreators.CustomerNotificationsActions.setList]));

                  case 3:
                    _context2.next = 5;
                    return _SagasHelper["default"].afterMergeModels.apply(_SagasHelper["default"], params.concat([_actionSelectors.CustomerNotificationsSelectors.smartList, _actionCreators.CustomerNotificationsActions.setSmartList]));

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
          return _SagasHelper["default"].defaultView(action, _api.CustomerNotificationsApi.view);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked3);
}

var _default = [(0, _effects.takeLatest)(_actionTypes.NOTIFICATIONS_ACTIONS.LIST, list), (0, _effects.takeLatest)(_actionTypes.NOTIFICATIONS_ACTIONS.SMART_LIST, list), (0, _effects.takeLatest)(_actionTypes.NOTIFICATIONS_ACTIONS.VIEW, view), (0, _effects.takeLatest)(_actionTypes.NOTIFICATIONS_ACTIONS.UPDATE, update)];
exports["default"] = _default;