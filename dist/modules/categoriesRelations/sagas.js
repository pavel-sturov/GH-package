import "regenerator-runtime/runtime";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(create),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(list),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(deleteModel);

/* eslint-disable max-len */
import { takeLatest } from 'redux-saga/effects';
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper';
import { CATEGORIES_RELATIONS_ACTIONS } from "./actionTypes";
import { CategoriesRelationsApi } from "./api";
/**
 * Create category relation
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{categoriesRelations, type}>|CallEffect|PutEffect<{type}>>}
 */

function create(action) {
  return regeneratorRuntime.wrap(function create$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return SagasHelper.defaultCreate(action, CategoriesRelationsApi.create);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Get category relations
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{categoriesRelations, type}>|CallEffect|PutEffect<{type}>>}
 */


function list(action) {
  return regeneratorRuntime.wrap(function list$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return SagasHelper.defaultList(action, CategoriesRelationsApi.list);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * Delete category relation
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{categoriesRelations, type}>|CallEffect|PutEffect<{type}>>}
 */


function deleteModel(action) {
  return regeneratorRuntime.wrap(function deleteModel$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return SagasHelper.defaultDelete(action, CategoriesRelationsApi["delete"]);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

export default [takeLatest(CATEGORIES_RELATIONS_ACTIONS.CREATE, create), takeLatest(CATEGORIES_RELATIONS_ACTIONS.LIST, list), takeLatest(CATEGORIES_RELATIONS_ACTIONS.DELETE, deleteModel)];