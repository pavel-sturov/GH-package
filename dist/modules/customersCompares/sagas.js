"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("regenerator-runtime/runtime");

var _effects = require("redux-saga/effects");

var _SagasHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper"));

var _SagasHelper2 = require("helpers/Redux/SagasHelper");

var _Customers = require("models/Customers");

var _actionCreators = require("./actionCreators");

var _actionSelectors = require("./actionSelectors");

var _actionTypes = require("./actionTypes");

var _api = require("./api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(list),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(create),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(view),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(deleteModel),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(deleteAll),
    _marked6 = /*#__PURE__*/regeneratorRuntime.mark(hiearchical),
    _marked7 = /*#__PURE__*/regeneratorRuntime.mark(products);

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
          return _SagasHelper["default"].defaultList(action, _api.CustomerCompareApi.list);

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
          return _SagasHelper["default"].defaultCreate(action, _api.CustomerCompareApi.create, _SagasHelper2.beforeAddCustomerId);

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
          return _SagasHelper["default"].defaultView(action, _api.CustomerCompareApi.view);

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
          return _SagasHelper["default"].defaultDelete(action, _api.CustomerCompareApi["delete"], null, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
                    return _SagasHelper["default"].afterDeleteModelFromList.apply(_SagasHelper["default"], params.concat([_actionSelectors.CustomerComparesSelectors.list, _actionCreators.CustomerComparesActions.setList, _Customers.CustomerCompare]));

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
          return _SagasHelper["default"].defaultDeleteAll(action, _api.CustomerCompareApi.deleteAll, null, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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
                    return _SagasHelper["default"].afterClearState.apply(_SagasHelper["default"], params.concat([_actionCreators.CustomerComparesActions.list]));

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
/**
 * Get hierarchical compares
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */


function hiearchical(action) {
  return regeneratorRuntime.wrap(function hiearchical$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return _SagasHelper["default"].defaultCustom(action, _api.CustomerCompareApi.hierarchical);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked6);
}
/**
 * Get category products compares
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */


function products(action) {
  return regeneratorRuntime.wrap(function products$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return _SagasHelper["default"].defaultCustom(action, _api.CustomerCompareApi.products);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked7);
}

var _default = [(0, _effects.takeLatest)(_actionTypes.COMPARES_ACTION.LIST, list), (0, _effects.takeLatest)(_actionTypes.COMPARES_ACTION.CREATE, create), (0, _effects.takeLatest)(_actionTypes.COMPARES_ACTION.VIEW, view), (0, _effects.takeLatest)(_actionTypes.COMPARES_ACTION.DELETE, deleteModel), (0, _effects.takeLatest)(_actionTypes.COMPARES_ACTION.DELETE_ALL, deleteAll), (0, _effects.takeLatest)(_actionTypes.COMPARES_ACTION.HIERARCHICAL, hiearchical), (0, _effects.takeLatest)(_actionTypes.COMPARES_ACTION.PRODUCTS, products)];
exports["default"] = _default;