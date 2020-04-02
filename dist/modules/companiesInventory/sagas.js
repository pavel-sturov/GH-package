import "regenerator-runtime/runtime";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(view),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(products);

/* eslint-disable max-len */
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper';
import { takeLatest } from 'redux-saga/effects';
import { COMPANIES_INVENTORY_ACTION } from "./actionTypes";
import { CompaniesInventoryApi } from "./api";
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
          return SagasHelper.defaultView(action, CompaniesInventoryApi.view);

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
          return SagasHelper.defaultList(action, CompaniesInventoryApi.products);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

export default [takeLatest(COMPANIES_INVENTORY_ACTION.VIEW, view), takeLatest(COMPANIES_INVENTORY_ACTION.PRODUCTS, products)];