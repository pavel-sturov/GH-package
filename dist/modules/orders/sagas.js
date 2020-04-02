"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("regenerator-runtime/runtime");

var _SagasHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper"));

var _effects = require("redux-saga/effects");

var _actionTypes = require("./actionTypes");

var _api = require("./api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(list),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(view),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(pay),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(finishByProduct),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(cancelByProduct);

/**
 * List orders
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{orders, type}>|CallEffect|PutEffect<{type}>>}
 */
function list(action) {
  return regeneratorRuntime.wrap(function list$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _SagasHelper["default"].defaultList(action, _api.OrdersApi.list);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * View order
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{orders, type}>|CallEffect|PutEffect<{type}>>}
 */


function view(action) {
  return regeneratorRuntime.wrap(function view$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _SagasHelper["default"].defaultView(action, _api.OrdersApi.view);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * Pay for order
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{orders, type}>|CallEffect|PutEffect<{type}>>}
 */


function pay(action) {
  return regeneratorRuntime.wrap(function pay$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _SagasHelper["default"].defaultView(action, _api.OrdersApi.pay);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Finish by product
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{orders, type}>|CallEffect|PutEffect<{type}>>}
 */


function finishByProduct(action) {
  return regeneratorRuntime.wrap(function finishByProduct$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _SagasHelper["default"].defaultCreate(action, _api.OrdersApi.finishByProduct);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
/**
 * Finish by product
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{orders, type}>|CallEffect|PutEffect<{type}>>}
 */


function cancelByProduct(action) {
  return regeneratorRuntime.wrap(function cancelByProduct$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _SagasHelper["default"].defaultCreate(action, _api.OrdersApi.cancelByProduct);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

var _default = [(0, _effects.takeLatest)(_actionTypes.ORDERS_ACTION.LIST, list), (0, _effects.takeLatest)(_actionTypes.ORDERS_ACTION.VIEW, view), (0, _effects.takeLatest)(_actionTypes.ORDERS_ACTION.PAY, pay), (0, _effects.takeLatest)(_actionTypes.ORDERS_ACTION.FINISH_BY_PRODUCT, finishByProduct), (0, _effects.takeLatest)(_actionTypes.ORDERS_ACTION.CANCEL_BY_PRODUCT, cancelByProduct)];
exports["default"] = _default;