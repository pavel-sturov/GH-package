import "regenerator-runtime/runtime";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(list),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(create),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(view),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(update),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(deleteModel);

import { takeLatest } from 'redux-saga/effects';
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper';
import { COMPANIES_OFFERS_ACTIONS } from "./actionTypes";
import { CompaniesOffersApi } from "./api";
/**
 * List company offers
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
          return SagasHelper.defaultList(action, CompaniesOffersApi.list);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Create company offer
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
          return SagasHelper.defaultCreate(action, CompaniesOffersApi.create);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * View company offer
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{companySetting, type}>|CallEffect|PutEffect<{type}>>}
 */


function view(action) {
  return regeneratorRuntime.wrap(function view$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return SagasHelper.defaultView(action, CompaniesOffersApi.view);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Update company offer
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{companySetting, type}>|CallEffect|PutEffect<{type}>>}
 */


function update(action) {
  return regeneratorRuntime.wrap(function update$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return SagasHelper.defaultUpdate(action, CompaniesOffersApi.update);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
/**
 * Delete company offer
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */


function deleteModel(action) {
  return regeneratorRuntime.wrap(function deleteModel$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return SagasHelper.defaultDelete(action, CompaniesOffersApi["delete"]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

export default [takeLatest(COMPANIES_OFFERS_ACTIONS.LIST, list), takeLatest(COMPANIES_OFFERS_ACTIONS.CREATE, create), takeLatest(COMPANIES_OFFERS_ACTIONS.VIEW, view), takeLatest(COMPANIES_OFFERS_ACTIONS.UPDATE, update), takeLatest(COMPANIES_OFFERS_ACTIONS.DELETE, deleteModel)];