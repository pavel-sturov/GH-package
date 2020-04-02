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
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(view),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(printEpc),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(differenceZoneTags),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(updateAll),
    _marked6 = /*#__PURE__*/regeneratorRuntime.mark(update),
    _marked7 = /*#__PURE__*/regeneratorRuntime.mark(deleteModel),
    _marked8 = /*#__PURE__*/regeneratorRuntime.mark(setDefective),
    _marked9 = /*#__PURE__*/regeneratorRuntime.mark(transfer);

/**
 * Get products base list
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productBase, type}>|CallEffect|PutEffect<{type}>>}
 */
function list(action) {
  return regeneratorRuntime.wrap(function list$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _SagasHelper["default"].defaultList(action, _api.ProductsBaseApi.list);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Get product base
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productBase, type}>|CallEffect|PutEffect<{type}>>}
 */


function view(action) {
  return regeneratorRuntime.wrap(function view$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _SagasHelper["default"].defaultView(action, _api.ProductsBaseApi.view);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * Print epc tag
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productBase, type}>|CallEffect|PutEffect<{type}>>}
 */


function printEpc(action) {
  return regeneratorRuntime.wrap(function printEpc$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _SagasHelper["default"].defaultView(action, _api.ProductsBaseApi.printEpc);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Get products base differences tags zones
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productBase, type}>|CallEffect|PutEffect<{type}>>}
 */


function differenceZoneTags(action) {
  return regeneratorRuntime.wrap(function differenceZoneTags$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _SagasHelper["default"].defaultList(action, _api.ProductsBaseApi.differenceZoneTags);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
/**
 * Update all products base by filter
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productBase, type}>|CallEffect|PutEffect<{type}>>}
 */


function updateAll(action) {
  return regeneratorRuntime.wrap(function updateAll$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _SagasHelper["default"].defaultList(action, _api.ProductsBaseApi.updateAll);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}
/**
 * Update products base
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productBase, type}>|CallEffect|PutEffect<{type}>>}
 */


function update(action) {
  return regeneratorRuntime.wrap(function update$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return _SagasHelper["default"].defaultUpdate(action, _api.ProductsBaseApi.update);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}
/**
 * Delete product base model
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productBase, type}>|CallEffect|PutEffect<{type}>>}
 */


function deleteModel(action) {
  return regeneratorRuntime.wrap(function deleteModel$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return _SagasHelper["default"].defaultDelete(action, _api.ProductsBaseApi["delete"], null, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _len,
                params,
                _key,
                _args7 = arguments;

            return regeneratorRuntime.wrap(function _callee$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    for (_len = _args7.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
                      params[_key] = _args7[_key];
                    }

                    _context7.next = 3;
                    return _SagasHelper["default"].afterDeleteModelFromList.apply(_SagasHelper["default"], params.concat([_actionSelectors.ProductsBaseStateSelectors.list, _actionCreators.ProductsBaseActions.setList]));

                  case 3:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee);
          }));

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked7);
}
/**
 * Move product base to defective
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productBase, type}>|CallEffect|PutEffect<{type}>>}
 */


function setDefective(action) {
  return regeneratorRuntime.wrap(function setDefective$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return _SagasHelper["default"].defaultView(action, _api.ProductsBaseApi.setDefective);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked8);
}
/**
 * Transfer product base
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productBase, type}>|CallEffect|PutEffect<{type}>>}
 */


function transfer(action) {
  return regeneratorRuntime.wrap(function transfer$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return _SagasHelper["default"].defaultView(action, _api.ProductsBaseApi.transfer);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked9);
}

var _default = [(0, _effects.takeLatest)(_actionTypes.PRODUCTS_BASE_ACTIONS.VIEW, view), (0, _effects.takeLatest)(_actionTypes.PRODUCTS_BASE_ACTIONS.LIST, list), (0, _effects.takeLatest)(_actionTypes.PRODUCTS_BASE_ACTIONS.PRINT_EPC, printEpc), (0, _effects.takeLatest)(_actionTypes.PRODUCTS_BASE_ACTIONS.DIFFERENCE_ZONE_TAGS, differenceZoneTags), (0, _effects.takeEvery)(_actionTypes.PRODUCTS_BASE_ACTIONS.UPDATE_ALL, updateAll), (0, _effects.takeLatest)(_actionTypes.PRODUCTS_BASE_ACTIONS.UPDATE, update), (0, _effects.takeLatest)(_actionTypes.PRODUCTS_BASE_ACTIONS.DELETE_EPC, deleteModel), (0, _effects.takeLatest)(_actionTypes.PRODUCTS_BASE_ACTIONS.SET_DEFECTIVE, setDefective), (0, _effects.takeLatest)(_actionTypes.PRODUCTS_BASE_ACTIONS.TRANSFER, transfer)];
exports["default"] = _default;