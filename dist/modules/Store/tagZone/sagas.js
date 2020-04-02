import "regenerator-runtime/runtime";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(list),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(create),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(view),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(deleteModel),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(update),
    _marked6 = /*#__PURE__*/regeneratorRuntime.mark(clearZones);

import { takeLatest } from 'redux-saga/effects';
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper';
import { TagZoneActions } from "./actionCreators";
import { TagZoneSelectors } from "./actionSelectors";
import { TAG_ZONE_ACTIONS } from "./actionTypes";
import { TagZoneApi } from "./api";
/**
 * Get tag zone list
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{tagZone, type}>|CallEffect|PutEffect<{type}>>}
 */

function list(action) {
  return regeneratorRuntime.wrap(function list$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return SagasHelper.defaultList(action, TagZoneApi.list);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Add tag zone
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{tagZone, type}>|CallEffect|PutEffect<{type}>>}
 */


function create(action) {
  return regeneratorRuntime.wrap(function create$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return SagasHelper.defaultCreate(action, TagZoneApi.create);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * View tag zone
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{tagZone, type}>|CallEffect|PutEffect<{type}>>}
 */


function view(action) {
  return regeneratorRuntime.wrap(function view$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return SagasHelper.defaultView(action, TagZoneApi.view);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Delete tag zone
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{tagZone, type}>|CallEffect|PutEffect<{type}>>}
 */


function deleteModel(action) {
  return regeneratorRuntime.wrap(function deleteModel$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return SagasHelper.defaultDelete(action, TagZoneApi["delete"], null, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _len,
                params,
                _key,
                _args4 = arguments;

            return regeneratorRuntime.wrap(function _callee$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    for (_len = _args4.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
                      params[_key] = _args4[_key];
                    }

                    _context4.next = 3;
                    return SagasHelper.afterDeleteModelFromList.apply(SagasHelper, params.concat([TagZoneSelectors.list, TagZoneActions.setList]));

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee);
          }));

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked4);
}
/**
 * Update tag zone
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{tagZone, type}>|CallEffect|PutEffect<{type}>>}
 */


function update(action) {
  return regeneratorRuntime.wrap(function update$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return SagasHelper.defaultUpdate(action, TagZoneApi.update);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked5);
}
/**
 * Tags moving clear zones
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{tagZone, type}>|CallEffect|PutEffect<{type}>>}
 */


function clearZones(action) {
  return regeneratorRuntime.wrap(function clearZones$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return SagasHelper.defaultCreate(action, TagZoneApi.clearZones);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked6);
}

export default [takeLatest(TAG_ZONE_ACTIONS.LIST, list), takeLatest(TAG_ZONE_ACTIONS.CREATE, create), takeLatest(TAG_ZONE_ACTIONS.VIEW, view), takeLatest(TAG_ZONE_ACTIONS.DELETE, deleteModel), takeLatest(TAG_ZONE_ACTIONS.UPDATE, update), takeLatest(TAG_ZONE_ACTIONS.CLEAR_ZONES, clearZones)];