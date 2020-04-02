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

var _actionTypes = require("./actionTypes");

var _api = require("./api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(list),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(create),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(view),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(deleteModel),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(update);

/**
 * Get customer addresses
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
          return _SagasHelper["default"].defaultList(action, _api.CustomerAddressesApi.list);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Add customer address
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
          return _SagasHelper["default"].defaultCreate(action, _api.CustomerAddressesApi.create, _SagasHelper2.beforeAddCustomerId);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * View customer address
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
          return _SagasHelper["default"].defaultView(action, _api.CustomerAddressesApi.view);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Delete customer address
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */


function deleteModel(action) {
  return regeneratorRuntime.wrap(function deleteModel$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _SagasHelper["default"].defaultDelete(action, _api.CustomerAddressesApi["delete"]);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
/**
 * Update customer address
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */


function update(action) {
  return regeneratorRuntime.wrap(function update$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _SagasHelper["default"].defaultUpdate(action, _api.CustomerAddressesApi.update);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

var _default = [(0, _effects.takeLatest)(_actionTypes.CUSTOMER_ADDRESSES_ACTION.LIST, list), (0, _effects.takeLatest)(_actionTypes.CUSTOMER_ADDRESSES_ACTION.CREATE, create), (0, _effects.takeLatest)(_actionTypes.CUSTOMER_ADDRESSES_ACTION.VIEW, view), (0, _effects.takeLatest)(_actionTypes.CUSTOMER_ADDRESSES_ACTION.DELETE, deleteModel), (0, _effects.takeLatest)(_actionTypes.CUSTOMER_ADDRESSES_ACTION.UPDATE, update)];
exports["default"] = _default;