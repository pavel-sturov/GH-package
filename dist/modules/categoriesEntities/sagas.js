import "regenerator-runtime/runtime";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(create),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(list),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(deleteModel);

/* eslint-disable max-len */
import { takeLatest } from 'redux-saga/effects';
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper';
import { CATEGORIES_ENTITIES_ACTIONS } from "./actionTypes";
import { CategoriesEntitiesApi } from "./api";
/**
 * Create category entity
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{categoriesEntities, type}>|CallEffect|PutEffect<{type}>>}
 */

function create(action) {
  return regeneratorRuntime.wrap(function create$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return SagasHelper.defaultCreate(action, CategoriesEntitiesApi.create);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * List categories entities
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{categoriesEntities, type}>|CallEffect|PutEffect<{type}>>}
 */


function list(action) {
  return regeneratorRuntime.wrap(function list$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return SagasHelper.defaultList(action, CategoriesEntitiesApi.list);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * Delete category entity
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{categoriesEntities, type}>|CallEffect|PutEffect<{type}>>}
 */


function deleteModel(action) {
  return regeneratorRuntime.wrap(function deleteModel$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return SagasHelper.defaultDelete(action, CategoriesEntitiesApi["delete"]);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

export default [takeLatest(CATEGORIES_ENTITIES_ACTIONS.CREATE, create), takeLatest(CATEGORIES_ENTITIES_ACTIONS.LIST, list), takeLatest(CATEGORIES_ENTITIES_ACTIONS.DELETE, deleteModel)];