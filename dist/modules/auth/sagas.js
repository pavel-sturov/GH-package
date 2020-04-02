"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("regenerator-runtime/runtime");

var _firebase = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/firebase"));

var _messaging = require("@kakadu-dev/base-frontend-helpers/firebase/messaging");

var _DataProvider = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/DataProvider"));

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _effects = require("redux-saga/effects");

var _api = require("api");

var _selectors = require("modules/selectors");

var _user = require("modules/user");

var _actionTypes = require("./actionTypes");

var _api2 = require("./api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(fetchSignIn),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(fetchLogOut),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(renewToken);

/**
 * Store selectors
 *
 * @type {{getUserId: (function(*): *)}}
 */
var selectors = {
  /**
   * Get auth
   *
   * @param state
   *
   * @return {*}
   */
  getAuth: function getAuth(state) {
    return _selectors.StateSelector.auth.isAuth(state);
  }
};
/**
 * Sign in firebase (google/facebook/vk/phone)
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */

function fetchSignIn(action) {
  var payload, type, _RequestActionHelper$, request, success, error, saveUser, saveUserSettings, saveUserCity, searchQuery, response, customParams, bodyParams, firebasePushToken;

  return regeneratorRuntime.wrap(function fetchSignIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          payload = action.payload, type = action.type;
          _RequestActionHelper$ = _RequestActionHelper["default"].getAllActions(type), request = _RequestActionHelper$.request, success = _RequestActionHelper$.success, error = _RequestActionHelper$.error;
          saveUser = _selectors.DispatchSelector.user.setUser;
          saveUserSettings = _selectors.DispatchSelector.user.setUserSettings;
          saveUserCity = _selectors.DispatchSelector.user.setUserCity;
          searchQuery = _DataProvider["default"].getSearchQuery(payload).addCustomParams({
            saveAuth: true
          }, true);
          _context.prev = 6;
          _context.next = 9;
          return (0, _effects.put)(request(searchQuery));

        case 9:
          _context.next = 11;
          return (0, _effects.call)(_api2.AuthApi.signIn, searchQuery);

        case 11:
          response = _context.sent;
          customParams = searchQuery.getCustomParams();
          bodyParams = searchQuery.getBody(); // Check response headers

          if (!(!response && response.response && response.response.headers)) {
            _context.next = 16;
            break;
          }

          throw new Error('Ошибка авторизации. Отсутствуют токены');

        case 16:
          _context.next = 18;
          return (0, _effects.put)(success({
            provider: bodyParams.provider,
            realProvider: customParams.realProvider || bodyParams.provider
          }, searchQuery));

        case 18:
          _context.next = 20;
          return (0, _effects.put)(saveUser(response.result));

        case 20:
          if (!(response && response.result && response.result.settings)) {
            _context.next = 23;
            break;
          }

          _context.next = 23;
          return (0, _effects.put)(saveUserSettings(response.result.settings));

        case 23:
          if (!(response && response.result && response.result.city)) {
            _context.next = 26;
            break;
          }

          _context.next = 26;
          return (0, _effects.put)(saveUserCity(response.result.city));

        case 26:
          _context.next = 28;
          return _messaging.FirebaseMessaging.getInstance().getUserToken();

        case 28:
          firebasePushToken = _context.sent;

          if (!firebasePushToken) {
            _context.next = 32;
            break;
          }

          _context.next = 32;
          return (0, _effects.put)(_user.UsersActions.updatePushToken(firebasePushToken));

        case 32:
          searchQuery.runSuccessCallback(response);
          _context.next = 40;
          break;

        case 35:
          _context.prev = 35;
          _context.t0 = _context["catch"](6);
          _context.next = 39;
          return (0, _effects.put)(error(searchQuery.addReduxRequestParams({
            error: _context.t0
          })));

        case 39:
          searchQuery.runErrorCallback(_context.t0);

        case 40:
          searchQuery.runCallback();

        case 41:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[6, 35]]);
}
/**
 * Log out (google/facebook/vk/phone)
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */


function fetchLogOut(action) {
  var payload, type, _RequestActionHelper$2, request, success, error, removeUser, removeUserSetting, removeAuth, searchQuery, auth, response;

  return regeneratorRuntime.wrap(function fetchLogOut$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          payload = action.payload, type = action.type;
          _RequestActionHelper$2 = _RequestActionHelper["default"].getAllActions(type), request = _RequestActionHelper$2.request, success = _RequestActionHelper$2.success, error = _RequestActionHelper$2.error;
          removeUser = _selectors.DispatchSelector.user.setUser;
          removeUserSetting = _selectors.DispatchSelector.user.setUserSettings;
          removeAuth = _selectors.DispatchSelector.auth.setAuth;
          searchQuery = _DataProvider["default"].getSearchQuery(payload);
          _context2.prev = 6;
          _context2.next = 9;
          return (0, _effects.select)(selectors.getAuth);

        case 9:
          auth = _context2.sent;
          _context2.next = 12;
          return (0, _effects.put)(request(searchQuery));

        case 12:
          _context2.next = 14;
          return (0, _effects.call)(_api2.AuthApi.logOut, searchQuery);

        case 14:
          response = _context2.sent;

          _firebase["default"].auth().signOut()["catch"](function () {// Skip firebase logout error
            // Dont` show unhandled promise rejection
          });

          _context2.next = 18;
          return (0, _effects.put)(success());

        case 18:
          _context2.next = 20;
          return (0, _effects.put)(removeUser(null));

        case 20:
          _context2.next = 22;
          return (0, _effects.put)(removeUserSetting(null));

        case 22:
          _context2.next = 24;
          return (0, _effects.put)(removeAuth(null));

        case 24:
          _context2.next = 26;
          return (0, _api.removeAuthTokens)();

        case 26:
          searchQuery.runSuccessCallback(response, auth);
          _context2.next = 34;
          break;

        case 29:
          _context2.prev = 29;
          _context2.t0 = _context2["catch"](6);
          _context2.next = 33;
          return (0, _effects.put)(error(searchQuery.addReduxRequestParams({
            error: _context2.t0
          })));

        case 33:
          searchQuery.runErrorCallback(_context2.t0);

        case 34:
          searchQuery.runCallback();

        case 35:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[6, 29]]);
}
/**
 * Renew auth tokens
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */


function renewToken(action) {
  var payload, type, _RequestActionHelper$3, request, success, error, searchQuery, response;

  return regeneratorRuntime.wrap(function renewToken$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          payload = action.payload, type = action.type;
          _RequestActionHelper$3 = _RequestActionHelper["default"].getAllActions(type), request = _RequestActionHelper$3.request, success = _RequestActionHelper$3.success, error = _RequestActionHelper$3.error;
          _context3.t0 = _DataProvider["default"].getSearchQuery(payload);
          _context3.next = 5;
          return (0, _api.getRefreshToken)();

        case 5:
          _context3.t1 = _context3.sent;
          _context3.t2 = {
            'Authorization-Refresh': _context3.t1
          };
          _context3.t3 = {
            headers: _context3.t2
          };
          searchQuery = _context3.t0.addRequestOptions.call(_context3.t0, _context3.t3, true).addCustomParams({
            saveAuth: true
          }, true);
          _context3.prev = 9;
          _context3.next = 12;
          return (0, _effects.put)(request(searchQuery));

        case 12:
          _context3.next = 14;
          return (0, _effects.call)(_api2.AuthApi.renewToken, searchQuery);

        case 14:
          response = _context3.sent;
          _context3.next = 17;
          return (0, _effects.put)(success());

        case 17:
          if (!(!response && response.response && response.response.headers)) {
            _context3.next = 19;
            break;
          }

          throw new Error('Ошибка обновления авторизации. Отсутствуют токены');

        case 19:
          searchQuery.runSuccessCallback(response);
          _context3.next = 27;
          break;

        case 22:
          _context3.prev = 22;
          _context3.t4 = _context3["catch"](9);
          _context3.next = 26;
          return (0, _effects.put)(error(searchQuery.addReduxRequestParams({
            error: _context3.t4
          })));

        case 26:
          searchQuery.runErrorCallback(_context3.t4);

        case 27:
          searchQuery.runCallback();

        case 28:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[9, 22]]);
}

var _default = [(0, _effects.takeLatest)(_actionTypes.AUTH_ACTION.SIGN_IN, fetchSignIn), (0, _effects.takeLatest)(_actionTypes.AUTH_ACTION.LOG_OUT, fetchLogOut), (0, _effects.takeLatest)(_actionTypes.AUTH_ACTION.RENEW_TOKEN, renewToken)];
exports["default"] = _default;