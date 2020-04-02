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

var _marked = /*#__PURE__*/regeneratorRuntime.mark(view),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(products);

/**
 * Inventory info
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{companiesInventory, type}>|CallEffect|PutEffect<{type}>>}
 */
function view(action) {
  return regeneratorRuntime.wrap(function view$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _SagasHelper["default"].defaultView(action, _api.CompaniesInventoryApi.view);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Get inventory products
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{companiesInventory, type}>|CallEffect|PutEffect<{type}>>}
 */


function products(action) {
  return regeneratorRuntime.wrap(function products$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _SagasHelper["default"].defaultList(action, _api.CompaniesInventoryApi.products);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

var _default = [(0, _effects.takeLatest)(_actionTypes.COMPANIES_INVENTORY_ACTION.VIEW, view), (0, _effects.takeLatest)(_actionTypes.COMPANIES_INVENTORY_ACTION.PRODUCTS, products)];
exports["default"] = _default;