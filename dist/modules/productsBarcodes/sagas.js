import "regenerator-runtime/runtime";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(create),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(list),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(update),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(deleteModel);

/* eslint-disable max-len */
import { takeLatest } from 'redux-saga/effects';
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper';
import { PRODUCTS_BARCODES_ACTIONS } from "./actionTypes";
import { ProductsBarcodesApi } from "./api";
/**
 * Create product barcode
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productsBarcodes, type}>|CallEffect|PutEffect<{type}>>}
 */

function create(action) {
  return regeneratorRuntime.wrap(function create$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return SagasHelper.defaultCreate(action, ProductsBarcodesApi.create);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Get products barcodes
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productsBarcodes, type}>|CallEffect|PutEffect<{type}>>}
 */


function list(action) {
  return regeneratorRuntime.wrap(function list$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return SagasHelper.defaultList(action, ProductsBarcodesApi.list);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * Update product barcode
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productsBarcodes, type}>|CallEffect|PutEffect<{type}>>}
 */


function update(action) {
  return regeneratorRuntime.wrap(function update$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return SagasHelper.defaultUpdate(action, ProductsBarcodesApi.update);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Delete product barcode
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{productsBarcodes, type}>|CallEffect|PutEffect<{type}>>}
 */


function deleteModel(action) {
  return regeneratorRuntime.wrap(function deleteModel$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return SagasHelper.defaultDelete(action, ProductsBarcodesApi["delete"]);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

export default [takeLatest(PRODUCTS_BARCODES_ACTIONS.CREATE, create), takeLatest(PRODUCTS_BARCODES_ACTIONS.LIST, list), takeLatest(PRODUCTS_BARCODES_ACTIONS.UPDATE, update), takeLatest(PRODUCTS_BARCODES_ACTIONS.DELETE, deleteModel)];