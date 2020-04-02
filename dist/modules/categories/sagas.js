import "regenerator-runtime/runtime";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(create),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(view),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(list),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(update),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(deleteModel),
    _marked6 = /*#__PURE__*/regeneratorRuntime.mark(fetchHierarchicalCategories),
    _marked7 = /*#__PURE__*/regeneratorRuntime.mark(popularCategories),
    _marked8 = /*#__PURE__*/regeneratorRuntime.mark(filters);

import { takeLatest } from 'redux-saga/effects';
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper';
import { CATEGORY_ACTION } from "./actionTypes";
import { CategoriesApi } from "./api";
/**
 * Create category
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */

function create(action) {
  return regeneratorRuntime.wrap(function create$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return SagasHelper.defaultCreate(action, CategoriesApi.create);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * View category
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */


function view(action) {
  return regeneratorRuntime.wrap(function view$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return SagasHelper.defaultView(action, CategoriesApi.view);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * List categories
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */


function list(action) {
  return regeneratorRuntime.wrap(function list$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return SagasHelper.defaultList(action, CategoriesApi.list);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Update category
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */


function update(action) {
  return regeneratorRuntime.wrap(function update$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return SagasHelper.defaultUpdate(action, CategoriesApi.update);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
/**
 * Delete category
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
          return SagasHelper.defaultDelete(action, CategoriesApi["delete"]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}
/**
 * Get hierarchical categories
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|CallEffect|PutEffect<{type}>|PutEffect<{categories, type}>>}
 */


function fetchHierarchicalCategories(action) {
  return regeneratorRuntime.wrap(function fetchHierarchicalCategories$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return SagasHelper.defaultCustom(action, CategoriesApi.fetchHierarchicalCategories);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}
/**
 * Get home page categories
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */


function popularCategories(action) {
  return regeneratorRuntime.wrap(function popularCategories$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return SagasHelper.defaultList(action, CategoriesApi.popularCategories);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}
/**
 * Category filters
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */


function filters(action) {
  return regeneratorRuntime.wrap(function filters$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return SagasHelper.defaultView(action, CategoriesApi.filters);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

export default [takeLatest(CATEGORY_ACTION.CREATE, create), takeLatest(CATEGORY_ACTION.VIEW, view), takeLatest(CATEGORY_ACTION.LIST, list), takeLatest(CATEGORY_ACTION.UPDATE, update), takeLatest(CATEGORY_ACTION.DELETE, deleteModel), //  Get hierarchical categories
takeLatest(CATEGORY_ACTION.FETCH_HIERARCHICAL, fetchHierarchicalCategories), takeLatest(CATEGORY_ACTION.HOME_CATEGORIES, popularCategories), takeLatest(CATEGORY_ACTION.FILTERS, filters)];