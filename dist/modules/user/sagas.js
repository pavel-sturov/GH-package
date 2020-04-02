import "core-js/modules/es6.string.iterator";
import "core-js/modules/es6.array.from";
import "core-js/modules/es6.function.name";
import "core-js/modules/es6.regexp.to-string";
import "core-js/modules/es6.date.to-string";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.array.is-array";
import "regenerator-runtime/runtime";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(viewUser),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(viewUserCity),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(viewUserSettings),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(updateUser),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(updateUserSettings),
    _marked6 = /*#__PURE__*/regeneratorRuntime.mark(updateMainUserInfo),
    _marked7 = /*#__PURE__*/regeneratorRuntime.mark(updatePushToken);

import { FirebaseMessaging } from '@kakadu-dev/base-frontend-helpers/firebase/messaging';
import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider';
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper';
import jwt_decode from 'jwt-decode';
import { call, put, select, takeLatest, throttle } from 'redux-saga/effects';
import { getJwtAccessToken, UsersApi } from "./api";
import { BUILD_TARGET } from 'config';
import { Customer } from 'models/Customers';
import { CustomerAuthMethodApi } from "../customersAuthMethods/api";
import { DispatchSelector, StateSelector } from "../selectors";
import { UsersActions } from "./actionCreators";
import { USER_ACTION } from "./actionTypes";
/**
 * Store selectors
 *
 * @type {{getUserId: (function(*): *)}}
 */

var selectors = {
  /**
   * Get users
   *
   * @param state
   *
   * @return {*}
   */
  getUser: function getUser(state) {
    return StateSelector.user.getUser(state);
  },
  getUserCity: function getUserCity(state) {
    return StateSelector.user.getUserCity(state);
  },
  getUserSettings: function getUserSettings(state) {
    return StateSelector.user.getUserSettings(state);
  }
};
/**
 * View user
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */

function viewUser(action) {
  var payload, type, id, searchQuery, _RequestActionHelper$, request, success, error, sQ, saveUserSettings, saveUserCity, response, firebasePushToken;

  return regeneratorRuntime.wrap(function viewUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          payload = action.payload, type = action.type;
          id = payload.id, searchQuery = payload.searchQuery;
          _RequestActionHelper$ = RequestActionHelper.getAllActions(type), request = _RequestActionHelper$.request, success = _RequestActionHelper$.success, error = _RequestActionHelper$.error;
          sQ = DataProvider.getSearchQuery(searchQuery);
          saveUserSettings = DispatchSelector.user.setUserSettings;
          saveUserCity = DispatchSelector.user.setUserCity;
          _context.prev = 6;
          _context.next = 9;
          return put(request(sQ));

        case 9:
          if (!id) {
            _context.next = 15;
            break;
          }

          _context.next = 12;
          return call(UsersApi.viewUser, id, sQ);

        case 12:
          response = _context.sent;
          _context.next = 18;
          break;

        case 15:
          _context.next = 17;
          return call(UsersApi.viewCurrentUser, sQ);

        case 17:
          response = _context.sent;

        case 18:
          _context.next = 20;
          return put(success(response.result, sQ));

        case 20:
          if (!(response && response.result && response.result.settings)) {
            _context.next = 23;
            break;
          }

          _context.next = 23;
          return put(saveUserSettings(response.result.settings));

        case 23:
          if (!(response && response.result && response.result.city)) {
            _context.next = 26;
            break;
          }

          _context.next = 26;
          return put(saveUserCity(response.result.city));

        case 26:
          if (!(BUILD_TARGET === 'client')) {
            _context.next = 33;
            break;
          }

          _context.next = 29;
          return FirebaseMessaging.getInstance().getUserToken();

        case 29:
          firebasePushToken = _context.sent;

          if (!firebasePushToken) {
            _context.next = 33;
            break;
          }

          _context.next = 33;
          return put(UsersActions.updatePushToken(firebasePushToken));

        case 33:
          sQ.runSuccessCallback(response);
          _context.next = 41;
          break;

        case 36:
          _context.prev = 36;
          _context.t0 = _context["catch"](6);
          _context.next = 40;
          return put(error(sQ.addReduxRequestParams({
            error: _context.t0
          })));

        case 40:
          sQ.runErrorCallback(_context.t0);

        case 41:
          sQ.runCallback();

        case 42:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[6, 36]]);
}
/**
 * Get user city. Get default city for site if user is guest
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type: string, users: *}>|PutEffect<{type: string, message: *}>|CallEffect>}
 */


function viewUserCity(action) {
  var payload, type, _RequestActionHelper$2, request, success, error, searchQuery, userCity, response;

  return regeneratorRuntime.wrap(function viewUserCity$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          payload = action.payload, type = action.type;
          _RequestActionHelper$2 = RequestActionHelper.getAllActions(type), request = _RequestActionHelper$2.request, success = _RequestActionHelper$2.success, error = _RequestActionHelper$2.error;
          searchQuery = DataProvider.getSearchQuery(payload);
          _context2.prev = 3;
          _context2.next = 6;
          return select(selectors.getUserCity);

        case 6:
          userCity = _context2.sent;

          if (!(!userCity || !userCity.result)) {
            _context2.next = 18;
            break;
          }

          _context2.next = 10;
          return put(request(searchQuery));

        case 10:
          _context2.next = 12;
          return call(UsersApi.viewUserCity, searchQuery);

        case 12:
          response = _context2.sent;
          _context2.next = 15;
          return put(success(response.result));

        case 15:
          searchQuery.runSuccessCallback(response);
          _context2.next = 21;
          break;

        case 18:
          _context2.next = 20;
          return put(success(userCity.result, searchQuery));

        case 20:
          searchQuery.runSuccessCallback(userCity);

        case 21:
          _context2.next = 28;
          break;

        case 23:
          _context2.prev = 23;
          _context2.t0 = _context2["catch"](3);
          _context2.next = 27;
          return put(error(searchQuery.addReduxRequestParams({
            error: _context2.t0
          })));

        case 27:
          searchQuery.runErrorCallback(_context2.t0);

        case 28:
          searchQuery.runCallback();

        case 29:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[3, 23]]);
}
/**
 * Get user settings.
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type: string, users: *}>|PutEffect<{type: string, message: *}>|CallEffect>}
 */


function viewUserSettings(action) {
  var payload, type, id, searchQuery, _RequestActionHelper$3, request, success, error, sQ, currentUser, userId, response, userSettings;

  return regeneratorRuntime.wrap(function viewUserSettings$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          payload = action.payload, type = action.type;
          id = payload.id, searchQuery = payload.searchQuery;
          _RequestActionHelper$3 = RequestActionHelper.getAllActions(type), request = _RequestActionHelper$3.request, success = _RequestActionHelper$3.success, error = _RequestActionHelper$3.error;
          sQ = DataProvider.getSearchQuery(searchQuery);
          _context3.prev = 4;
          _context3.next = 7;
          return select(selectors.getUser);

        case 7:
          currentUser = _context3.sent;

          if (!(!currentUser.result || !currentUser.result.settings)) {
            _context3.next = 19;
            break;
          }

          _context3.next = 11;
          return put(request(sQ));

        case 11:
          userId = id || currentUser.result && currentUser.result.id;
          _context3.next = 14;
          return call(UsersApi.viewSettings, userId, sQ);

        case 14:
          response = _context3.sent;
          _context3.next = 17;
          return put(success(response.result));

        case 17:
          _context3.next = 24;
          break;

        case 19:
          _context3.next = 21;
          return select(selectors.getUserSettings);

        case 21:
          userSettings = _context3.sent;
          _context3.next = 24;
          return put(success(userSettings.result, sQ));

        case 24:
          sQ.runSuccessCallback();
          _context3.next = 32;
          break;

        case 27:
          _context3.prev = 27;
          _context3.t0 = _context3["catch"](4);
          _context3.next = 31;
          return put(error(sQ.addReduxRequestParams({
            error: _context3.t0
          })));

        case 31:
          sQ.runErrorCallback(_context3.t0);

        case 32:
          sQ.runCallback();

        case 33:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[4, 27]]);
}
/**
 * Update user
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */


function updateUser(action) {
  var payload, type, id, searchQuery, _RequestActionHelper$4, request, success, error, sQ, saveUser, realId, currentUserState, user, response;

  return regeneratorRuntime.wrap(function updateUser$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          payload = action.payload, type = action.type;
          id = payload.id, searchQuery = payload.searchQuery;
          _RequestActionHelper$4 = RequestActionHelper.getAllActions(type), request = _RequestActionHelper$4.request, success = _RequestActionHelper$4.success, error = _RequestActionHelper$4.error;
          sQ = DataProvider.getSearchQuery(searchQuery);
          saveUser = DispatchSelector.user.setUser;
          _context4.prev = 5;
          _context4.next = 8;
          return put(request(sQ));

        case 8:
          realId = id;

          if (id) {
            _context4.next = 15;
            break;
          }

          _context4.next = 12;
          return select(selectors.getUser);

        case 12:
          currentUserState = _context4.sent;
          user = Customer.create(currentUserState);
          realId = user.getId();

        case 15:
          _context4.next = 17;
          return call(UsersApi.updateUser, realId, sQ);

        case 17:
          response = _context4.sent;
          _context4.next = 20;
          return put(success());

        case 20:
          _context4.next = 22;
          return put(saveUser(response.result));

        case 22:
          sQ.runSuccessCallback(response);
          _context4.next = 30;
          break;

        case 25:
          _context4.prev = 25;
          _context4.t0 = _context4["catch"](5);
          _context4.next = 29;
          return put(error(sQ.addReduxRequestParams({
            error: _context4.t0
          })));

        case 29:
          sQ.runErrorCallback(_context4.t0);

        case 30:
          sQ.runCallback();

        case 31:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[5, 25]]);
}
/**
 * Update user settings
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */


function updateUserSettings(action) {
  var payload, type, id, searchQuery, _RequestActionHelper$5, request, success, error, sQ, setUserSetting, realId, currentUserState, user, response;

  return regeneratorRuntime.wrap(function updateUserSettings$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          payload = action.payload, type = action.type;
          id = payload.id, searchQuery = payload.searchQuery;
          _RequestActionHelper$5 = RequestActionHelper.getAllActions(type), request = _RequestActionHelper$5.request, success = _RequestActionHelper$5.success, error = _RequestActionHelper$5.error;
          sQ = DataProvider.getSearchQuery(searchQuery);
          setUserSetting = DispatchSelector.user.setUserSettings;
          _context5.prev = 5;
          _context5.next = 8;
          return put(request(sQ));

        case 8:
          realId = id;

          if (id) {
            _context5.next = 15;
            break;
          }

          _context5.next = 12;
          return select(selectors.getUser);

        case 12:
          currentUserState = _context5.sent;
          user = Customer.create(currentUserState);
          realId = user.getId();

        case 15:
          _context5.next = 17;
          return call(UsersApi.updateSettings, realId, sQ);

        case 17:
          response = _context5.sent;
          _context5.next = 20;
          return put(success());

        case 20:
          _context5.next = 22;
          return put(setUserSetting(response.result));

        case 22:
          sQ.runSuccessCallback(response);
          _context5.next = 30;
          break;

        case 25:
          _context5.prev = 25;
          _context5.t0 = _context5["catch"](5);
          _context5.next = 29;
          return put(error(sQ.addReduxRequestParams({
            error: _context5.t0
          })));

        case 29:
          sQ.runErrorCallback(_context5.t0);

        case 30:
          sQ.runCallback();

        case 31:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[5, 25]]);
}
/**
 * Update main user info
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */


function updateMainUserInfo(action) {
  var payload, type, id, searchQuery, _RequestActionHelper$6, request, success, error, sQ, userSettingsFields, userFields, updateUserFieldsAction, updateUserSettingsAction, _yield, _yield2, responseFields, responseSettings;

  return regeneratorRuntime.wrap(function updateMainUserInfo$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          payload = action.payload, type = action.type;
          id = payload.id, searchQuery = payload.searchQuery;
          _RequestActionHelper$6 = RequestActionHelper.getAllActions(type), request = _RequestActionHelper$6.request, success = _RequestActionHelper$6.success, error = _RequestActionHelper$6.error;
          sQ = DataProvider.getSearchQuery(searchQuery);
          userSettingsFields = sQ.getBody().settings;
          userFields = sQ.getBody().fields;
          updateUserFieldsAction = DispatchSelector.user.updateUserFields;
          updateUserSettingsAction = DispatchSelector.user.updateUserSettings;
          _context6.prev = 8;
          _context6.next = 11;
          return put(request(sQ));

        case 11:
          _context6.next = 13;
          return [updateUser(updateUserFieldsAction({
            id: id,
            searchQuery: DataProvider.buildQuery().addBody(userSettingsFields)
          })), updateUserSettings(updateUserSettingsAction({
            id: id,
            searchQuery: DataProvider.buildQuery().addBody(userFields)
          }))];

        case 13:
          _yield = _context6.sent;
          _yield2 = _slicedToArray(_yield, 2);
          responseFields = _yield2[0];
          responseSettings = _yield2[1];
          _context6.next = 19;
          return put(success({
            fields: responseFields.result,
            settings: responseSettings.result
          }, sQ));

        case 19:
          sQ.runSuccessCallback(responseFields, responseSettings);
          _context6.next = 27;
          break;

        case 22:
          _context6.prev = 22;
          _context6.t0 = _context6["catch"](8);
          _context6.next = 26;
          return put(error(sQ.addReduxRequestParams({
            error: _context6.t0
          })));

        case 26:
          sQ.runErrorCallback(_context6.t0);

        case 27:
          sQ.runCallback();

        case 28:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[8, 22]]);
}

function updatePushToken(action) {
  var payload, type, _RequestActionHelper$7, request, success, error, sQ, jwtTokenEncoded, jwtDecoded, userAuthId, response;

  return regeneratorRuntime.wrap(function updatePushToken$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          payload = action.payload, type = action.type;
          _RequestActionHelper$7 = RequestActionHelper.getAllActions(type), request = _RequestActionHelper$7.request, success = _RequestActionHelper$7.success, error = _RequestActionHelper$7.error;
          sQ = DataProvider.buildQuery();
          _context7.prev = 3;
          _context7.next = 6;
          return put(request(sQ));

        case 6:
          _context7.next = 8;
          return getJwtAccessToken();

        case 8:
          jwtTokenEncoded = _context7.sent;

          if (jwtTokenEncoded) {
            _context7.next = 11;
            break;
          }

          return _context7.abrupt("return");

        case 11:
          jwtDecoded = jwt_decode(jwtTokenEncoded);
          userAuthId = jwtDecoded && jwtDecoded.authId;

          if (userAuthId) {
            _context7.next = 15;
            break;
          }

          return _context7.abrupt("return");

        case 15:
          sQ.addBody({
            pushToken: payload
          });
          _context7.next = 18;
          return call(CustomerAuthMethodApi.update, userAuthId, sQ);

        case 18:
          response = _context7.sent;
          _context7.next = 21;
          return put(success(response, sQ));

        case 21:
          sQ.runSuccessCallback(response);
          _context7.next = 29;
          break;

        case 24:
          _context7.prev = 24;
          _context7.t0 = _context7["catch"](3);
          _context7.next = 28;
          return put(error(sQ.addReduxRequestParams({
            error: _context7.t0
          })));

        case 28:
          sQ.runErrorCallback(_context7.t0);

        case 29:
          sQ.runCallback();

        case 30:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[3, 24]]);
}

export default [takeLatest(USER_ACTION.USER, viewUser), takeLatest(USER_ACTION.UPDATE_USER_FIELDS, updateUser), takeLatest(USER_ACTION.USER_CITY, viewUserCity), takeLatest(USER_ACTION.USER_SETTINGS, viewUserSettings), takeLatest(USER_ACTION.UPDATE_USER_SETTINGS, updateUserSettings), takeLatest(USER_ACTION.UPDATE_MAIN_USER_INFO, updateMainUserInfo), throttle(60000, USER_ACTION.UPDATE_PUSH_TOKEN, updatePushToken)];