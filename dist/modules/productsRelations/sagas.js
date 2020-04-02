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

var _marked = /*#__PURE__*/regeneratorRuntime.mark(create),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(view),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(list),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(deleteModel);

/**
 * Create product relation
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productsRelations, type}>|CallEffect|PutEffect<{type}>>}
 */
function create(action) {
  return regeneratorRuntime.wrap(function create$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _SagasHelper["default"].defaultCreate(action, _api.ProductsRelationsApi.create);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Get product relation
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productsRelations, type}>|CallEffect|PutEffect<{type}>>}
 */


function view(action) {
  return regeneratorRuntime.wrap(function view$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _SagasHelper["default"].defaultView(action, _api.ProductsRelationsApi.view);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * Get products relations
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productsRelations, type}>|CallEffect|PutEffect<{type}>>}
 */


function list(action) {
  return regeneratorRuntime.wrap(function list$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _SagasHelper["default"].defaultList(action, _api.ProductsRelationsApi.list);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Delete product relation
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productsRelations, type}>|CallEffect|PutEffect<{type}>>}
 */


function deleteModel(action) {
  return regeneratorRuntime.wrap(function deleteModel$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _SagasHelper["default"].defaultDelete(action, _api.ProductsRelationsApi["delete"]);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

var _default = [(0, _effects.takeLatest)(_actionTypes.PRODUCTS_RELATIONS_ACTIONS.CREATE, create), (0, _effects.takeLatest)(_actionTypes.PRODUCTS_RELATIONS_ACTIONS.VIEW, view), (0, _effects.takeLatest)(_actionTypes.PRODUCTS_RELATIONS_ACTIONS.LIST, list), (0, _effects.takeLatest)(_actionTypes.PRODUCTS_RELATIONS_ACTIONS.DELETE, deleteModel)];
exports["default"] = _default;