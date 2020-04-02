import "regenerator-runtime/runtime";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(list),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(create),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(update),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(deleteModel),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(deleteAll),
    _marked6 = /*#__PURE__*/regeneratorRuntime.mark(checkout),
    _marked7 = /*#__PURE__*/regeneratorRuntime.mark(checkoutTerminal),
    _marked8 = /*#__PURE__*/regeneratorRuntime.mark(createOrder),
    _marked9 = /*#__PURE__*/regeneratorRuntime.mark(createOrderTerminal),
    _marked10 = /*#__PURE__*/regeneratorRuntime.mark(startSessionTerminal);

import { put, select, takeLatest } from 'redux-saga/effects';
import { getClientId, TYPE } from '@kakadu-dev/base-frontend-helpers/helpers/Client';
import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider';
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper';
import { beforeAddCustomerId } from 'helpers/Redux/SagasHelper';
import { DispatchSelector, StateSelector } from "../selectors";
import { UsersStateSelectors } from "../user";
import { CartActions } from "./actionCreators";
import { CartStateSelectors } from "./actionSelectors";
import { CART_ACTION } from "./actionTypes";
import { CartApi } from "./api";
/**
 * Get cart products
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */

function list(action) {
  return regeneratorRuntime.wrap(function list$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return SagasHelper.defaultList(action, CartApi.list);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Add product to cart
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */


function create(action) {
  return regeneratorRuntime.wrap(function create$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return SagasHelper.defaultCreate(action, CartApi.create, /*#__PURE__*/regeneratorRuntime.mark(function _callee(searchQuery) {
            var body, currentUser;
            return regeneratorRuntime.wrap(function _callee$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return beforeAddCustomerId(searchQuery);

                  case 2:
                    body = searchQuery.getBody();

                    if (body.cityId) {
                      _context2.next = 9;
                      break;
                    }

                    _context2.next = 6;
                    return select(UsersStateSelectors.getUser);

                  case 6:
                    currentUser = _context2.sent;
                    // Add user city id if not exist
                    !body.cityId && (body.cityId = currentUser.result.cityId);
                    searchQuery.addBody(body, true);

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee);
          }), /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _len,
                params,
                _key,
                _args3 = arguments;

            return regeneratorRuntime.wrap(function _callee2$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    for (_len = _args3.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
                      params[_key] = _args3[_key];
                    }

                    _context3.next = 3;
                    return SagasHelper.afterMergeModels.apply(SagasHelper, params.concat([0, CartStateSelectors.list, CartActions.setList]));

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee2);
          }));

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked2);
}
/**
 * Update cart product
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */


function update(action) {
  return regeneratorRuntime.wrap(function update$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return SagasHelper.defaultUpdate(action, CartApi.update, null, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _len2,
                params,
                _key2,
                _args5 = arguments;

            return regeneratorRuntime.wrap(function _callee3$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    for (_len2 = _args5.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                      params[_key2] = _args5[_key2];
                    }

                    _context5.next = 3;
                    return SagasHelper.afterMergeModels.apply(SagasHelper, params.concat([CartStateSelectors.list, CartActions.setList]));

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee3);
          }));

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked3);
}
/**
 * Delete cart products
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */


function deleteModel(action) {
  return regeneratorRuntime.wrap(function deleteModel$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return SagasHelper.defaultDelete(action, CartApi.deleteModel, null, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _len3,
                params,
                _key3,
                _args7 = arguments;

            return regeneratorRuntime.wrap(function _callee4$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    for (_len3 = _args7.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                      params[_key3] = _args7[_key3];
                    }

                    _context7.next = 3;
                    return SagasHelper.afterDeleteModelFromList.apply(SagasHelper, params.concat([CartStateSelectors.list, CartActions.setList]));

                  case 3:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee4);
          }));

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked4);
}
/**
 * Delete all cart products
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */


function deleteAll(action) {
  return regeneratorRuntime.wrap(function deleteAll$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return SagasHelper.defaultDeleteAll(action, CartApi.deleteAll, null, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _len4,
                params,
                _key4,
                _args9 = arguments;

            return regeneratorRuntime.wrap(function _callee5$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    for (_len4 = _args9.length, params = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                      params[_key4] = _args9[_key4];
                    }

                    _context9.next = 3;
                    return SagasHelper.afterClearState.apply(SagasHelper, params.concat([CartActions.setList]));

                  case 3:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee5);
          }));

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked5);
}
/**
 * Get cart checkout info
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */


function checkout(action) {
  return regeneratorRuntime.wrap(function checkout$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return SagasHelper.defaultCustom(action, CartApi.checkout, null, null, DataProvider.handleResponseView);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked6);
}
/**
 * Get cart checkout info for terminal
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */


function checkoutTerminal(action) {
  return regeneratorRuntime.wrap(function checkoutTerminal$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return SagasHelper.defaultCustom(action, CartApi.checkoutTerminal, null, null, DataProvider.handleResponseView);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked7);
}
/**
 * Create order
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */


function createOrder(action) {
  return regeneratorRuntime.wrap(function createOrder$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return SagasHelper.defaultCustom(action, CartApi.createOrder, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _yield$select, user, signInAction, clientId, signInQuery;

            return regeneratorRuntime.wrap(function _callee6$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return select(StateSelector.user.getUser);

                  case 2:
                    _yield$select = _context13.sent;
                    user = _yield$select.result;

                    if (user) {
                      _context13.next = 12;
                      break;
                    }

                    signInAction = DispatchSelector.auth.signIn;
                    _context13.next = 8;
                    return getClientId();

                  case 8:
                    clientId = _context13.sent;
                    signInQuery = DataProvider.buildQuery().addExpands('settings', 'city').addBody({
                      provider: TYPE,
                      token: clientId,
                      params: {
                        browserId: clientId
                      }
                    });
                    _context13.next = 12;
                    return put(signInAction(signInQuery));

                  case 12:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee6);
          }), null, DataProvider.handleResponseView);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked8);
}
/**
 * Create order from terminal
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */


function createOrderTerminal(action) {
  return regeneratorRuntime.wrap(function createOrderTerminal$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return SagasHelper.defaultCustom(action, CartApi.createOrderTerminal, null, null, DataProvider.handleResponseView);

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked9);
}
/**
 * Start session terminal
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */


function startSessionTerminal(action) {
  return regeneratorRuntime.wrap(function startSessionTerminal$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return SagasHelper.defaultCustom(action, CartApi.startSessionTerminal, null, null, DataProvider.handleResponseView);

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked10);
}

export default [takeLatest(CART_ACTION.LIST, list), takeLatest(CART_ACTION.CREATE, create), takeLatest(CART_ACTION.UPDATE, update), takeLatest(CART_ACTION.DELETE, deleteModel), takeLatest(CART_ACTION.DELETE_ALL, deleteAll), takeLatest(CART_ACTION.CHECKOUT, checkout), takeLatest(CART_ACTION.CHECKOUT_TERMINAL, checkoutTerminal), takeLatest(CART_ACTION.CREATE_ORDER, createOrder), takeLatest(CART_ACTION.CREATE_ORDER_TERRMINAL, createOrderTerminal), takeLatest(CART_ACTION.START_SESSION_TERMINAL, startSessionTerminal)];