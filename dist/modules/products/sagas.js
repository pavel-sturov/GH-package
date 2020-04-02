import "regenerator-runtime/runtime";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(create),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(view),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(viewBarcode),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(list),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(update),
    _marked6 = /*#__PURE__*/regeneratorRuntime.mark(deleteModel),
    _marked7 = /*#__PURE__*/regeneratorRuntime.mark(addToStock),
    _marked8 = /*#__PURE__*/regeneratorRuntime.mark(batchUpload);

import { takeLatest } from 'redux-saga/effects';
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper';
import { PRODUCTS_ACTIONS } from "./actionTypes";
import { ProductsApi } from "./api";
/**
 * Create product
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{products, type}>|CallEffect|PutEffect<{type}>>}
 */

function create(action) {
  return regeneratorRuntime.wrap(function create$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return SagasHelper.defaultCreate(action, ProductsApi.create);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Get product
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{products, type}>|CallEffect|PutEffect<{type}>>}
 */


function view(action) {
  return regeneratorRuntime.wrap(function view$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return SagasHelper.defaultView(action, ProductsApi.view);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * Get product by barcode
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{products, type}>|CallEffect|PutEffect<{type}>>}
 */


function viewBarcode(action) {
  return regeneratorRuntime.wrap(function viewBarcode$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return SagasHelper.defaultView(action, ProductsApi.viewBarcode);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Get products
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{products, type}>|CallEffect|PutEffect<{type}>>}
 */


function list(action) {
  return regeneratorRuntime.wrap(function list$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return SagasHelper.defaultList(action, ProductsApi.list);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
/**
 * Update product
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{products, type}>|CallEffect|PutEffect<{type}>>}
 */


function update(action) {
  return regeneratorRuntime.wrap(function update$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return SagasHelper.defaultUpdate(action, ProductsApi.update);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}
/**
 * Delete product
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{products, type}>|CallEffect|PutEffect<{type}>>}
 */


function deleteModel(action) {
  return regeneratorRuntime.wrap(function deleteModel$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return SagasHelper.defaultDelete(action, ProductsApi.deleteModel);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}
/**
 * Add product to stock
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{products, type}>|CallEffect|PutEffect<{type}>>}
 */


function addToStock(action) {
  return regeneratorRuntime.wrap(function addToStock$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return SagasHelper.defaultCreate(action, ProductsApi.addToStock);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}
/**
 * Upload products attachments
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{products, type}>|CallEffect|PutEffect<{type}>>}
 */


function batchUpload(action) {
  return regeneratorRuntime.wrap(function batchUpload$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return SagasHelper.defaultCreate(action, ProductsApi.batchUpload);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

export default [takeLatest(PRODUCTS_ACTIONS.CREATE, create), takeLatest(PRODUCTS_ACTIONS.VIEW, view), takeLatest(PRODUCTS_ACTIONS.VIEW_BARCODE, viewBarcode), takeLatest(PRODUCTS_ACTIONS.LIST, list), takeLatest(PRODUCTS_ACTIONS.SEARCH, list), takeLatest(PRODUCTS_ACTIONS.UPDATE, update), takeLatest(PRODUCTS_ACTIONS.DELETE, deleteModel), takeLatest(PRODUCTS_ACTIONS.ADD_TO_STOCK, addToStock), takeLatest(PRODUCTS_ACTIONS.BATCH_UPLOAD, batchUpload)];