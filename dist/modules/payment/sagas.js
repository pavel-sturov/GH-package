"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("regenerator-runtime/runtime");

var _effects = require("redux-saga/effects");

var _DataProvider = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/DataProvider"));

var _SagasHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper"));

var _selectors = require("../selectors");

var _actionTypes = require("./actionTypes");

var _api = require("./api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(list),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(create),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(postSecure),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(deleteCard),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(setMain);

/**
 * List payment cards
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function list(action) {
  return regeneratorRuntime.wrap(function list$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _SagasHelper["default"].defaultList(action, _api.PaymentApi.list);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Create payment card
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */


function create(action) {
  return regeneratorRuntime.wrap(function create$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _SagasHelper["default"].defaultCreate(action, _api.PaymentApi.create);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * Send post data after 3D secure done
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */


function postSecure(action) {
  return regeneratorRuntime.wrap(function postSecure$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _SagasHelper["default"].defaultCustom(action, _api.PaymentApi.postSecure);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Delete payment card
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */


function deleteCard(action) {
  var setCardlist;
  return regeneratorRuntime.wrap(function deleteCard$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          setCardlist = _selectors.DispatchSelector.payment.setList;
          _context5.next = 3;
          return _SagasHelper["default"].defaultDelete(action, _api.PaymentApi["delete"], null, /*#__PURE__*/regeneratorRuntime.mark(function _callee(response, searchQuery) {
            return regeneratorRuntime.wrap(function _callee$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return (0, _effects.put)(setCardlist(_DataProvider["default"].handleResponseList(response), searchQuery));

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee);
          }));

        case 3:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked4);
}
/**
 * Set primary payment card
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */


function setMain(action) {
  var setCardlist;
  return regeneratorRuntime.wrap(function setMain$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          setCardlist = _selectors.DispatchSelector.payment.setList;
          _context7.next = 3;
          return _SagasHelper["default"].defaultCustom(action, _api.PaymentApi.setMain, null, /*#__PURE__*/regeneratorRuntime.mark(function _callee2(response, searchQuery) {
            return regeneratorRuntime.wrap(function _callee2$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return (0, _effects.put)(setCardlist(_DataProvider["default"].handleResponseList(response), searchQuery));

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee2);
          }));

        case 3:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked5);
}

var _default = [(0, _effects.takeLatest)(_actionTypes.PAYMENT_ACTION.LIST, list), (0, _effects.takeLatest)(_actionTypes.PAYMENT_ACTION.CREATE, create), (0, _effects.takeLatest)(_actionTypes.PAYMENT_ACTION.POST_SECURE, postSecure), (0, _effects.takeLatest)(_actionTypes.PAYMENT_ACTION.DELETE, deleteCard), (0, _effects.takeLatest)(_actionTypes.PAYMENT_ACTION.SET_MAIN, setMain)];
exports["default"] = _default;