import "core-js/modules/es6.function.name";
import "core-js/modules/es6.regexp.to-string";
import "core-js/modules/es6.date.to-string";
import "core-js/modules/es6.array.from";
import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.array.is-array";
import "core-js/modules/es6.object.define-properties";
import "core-js/modules/es7.object.get-own-property-descriptors";
import "core-js/modules/es6.array.for-each";
import "core-js/modules/es6.array.filter";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.define-property";
import "regenerator-runtime/runtime";
import "core-js/modules/es6.promise";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es6.string.iterator";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(callApi);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import { callApi as defaultCallApi } from '@kakadu-dev/base-frontend-helpers/api';
import { PLATFORM, TYPE } from '@kakadu-dev/base-frontend-helpers/helpers/Client';
import { deleteCookie, getCookie, setCookie } from '@kakadu-dev/base-frontend-helpers/helpers/Cookie';
import { AuthService } from '@kakadu-dev/base-frontend-helpers/services/AuthService';
import FetchService from '@kakadu-dev/base-frontend-helpers/services/FetchService';
import { API_URL, BUILD_TARGET, ENVIRONMENT_DEV, LANGUAGE_CODE } from 'config';
import { repeatRequest, requestErrorHandler } from "./authHelpers";
/**
 * Get jwt access token
 *
 * @return {string}
 */

export function getJwtAccessToken() {
  return getCookie('JwtAccessToken');
}
/**
 * Get jwt refresh token
 *
 * @return {string}
 */

export function getRefreshToken() {
  return getCookie('JwtRefreshToken');
}
/**
 * Save firebase token
 *
 * @param {object} headers
 *
 * @return {Promise|boolean}
 */

export function saveFirebaseToken(headers) {
  if (!headers || typeof headers.get !== 'function') {
    return false;
  }

  var token = headers.get('Firebase-Token');

  if (token) {
    return setCookie('FirebaseToken', token, true);
  }

  return false;
}
/**
 * Remove firebase token
 *
 * @return {Promise}
 */

function removeFirebaseToken() {
  return deleteCookie('FirebaseToken');
}
/**
 * Save auth tokens
 *
 * @param {object} headers
 *
 * @return {undefined}
 */


export function saveAuthTokens(_x) {
  return _saveAuthTokens.apply(this, arguments);
}
/**
 * Remove auth tokens
 *
 * @return {undefined}
 */

function _saveAuthTokens() {
  _saveAuthTokens = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(headers) {
    var accessToken, refreshToken;
    return regeneratorRuntime.wrap(function _callee2$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (!(!headers || typeof headers.get !== 'function')) {
              _context6.next = 2;
              break;
            }

            return _context6.abrupt("return", false);

          case 2:
            accessToken = headers.get('Jwt-Access-Token');
            refreshToken = headers.get('Jwt-Refresh-Token');

            if (!(!accessToken || !refreshToken)) {
              _context6.next = 6;
              break;
            }

            return _context6.abrupt("return", false);

          case 6:
            return _context6.abrupt("return", Promise.all([setCookie('JwtAccessToken', accessToken, true), setCookie('JwtRefreshToken', refreshToken, true)].concat(_toConsumableArray(TYPE === 'web' ? [deleteCookie('Guest-Id')] : []), [saveFirebaseToken(headers)])));

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee2);
  }));
  return _saveAuthTokens.apply(this, arguments);
}

export function removeAuthTokens() {
  return Promise.all([deleteCookie('JwtAccessToken'), deleteCookie('JwtRefreshToken'), removeFirebaseToken()]);
}
/**
 * Save guest identity
 *
 * @param {Object} headers
 *
 * @return {boolean}
 */

export function saveGuestId(headers) {
  if (!headers || typeof headers.get !== 'function') {
    return false;
  }

  var guestId = headers.get('Guest-Id');

  if (typeof guestId === 'string' && guestId.length > 0) {
    return setCookie('Guest-Id', guestId, true);
  }

  return true;
}
/**
 * Get guest identity
 *
 * @return {string | *}
 */

export function getGuestId() {
  return getCookie('Guest-Id');
}
/**
 * Request config
 *
 * @type {object}
 */

export var requestConfig = {
  domain: API_URL,
  requestHeaders: _objectSpread({
    'Accept-Language': LANGUAGE_CODE,
    'Client': TYPE,
    'ClientDevice': PLATFORM
  }, ENVIRONMENT_DEV ? {
    'Cookie': 'XDEBUG_PROFILE="PHPSTORM"'
  } : {}, {}, BUILD_TARGET === 'server' ? {
    'User-Agent': 'Kakadu Base Node Server. Version: 1'
  } : {}),
  successCallback: function successCallback(apiResult, customParams) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!apiResult.response || !apiResult.response.headers)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              if (!(TYPE === 'web')) {
                _context.next = 5;
                break;
              }

              _context.next = 5;
              return saveGuestId(apiResult.response.headers);

            case 5:
              if (!customParams.saveAuth) {
                _context.next = 9;
                break;
              }

              _context.next = 8;
              return saveAuthTokens(apiResult.response.headers);

            case 8:
              AuthService.getInstance().setSeamlessLogin(false).setSeamlessError(false);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
};
/**
 * Make request and preprocessing response
 *
 * @param {string} endpoint
 * @param {SearchQuery|object} options
 *
 * @return {IterableIterator<Promise<{response: {response: Response, json: any}}|{error: (*|string)}>|*>}
 */

export function callApi(endpoint, options) {
  var result;
  return regeneratorRuntime.wrap(function callApi$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return defaultCallApi(endpoint, options, {
            initRequest: /*#__PURE__*/regeneratorRuntime.mark(function initRequest() {
              return regeneratorRuntime.wrap(function initRequest$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!AuthService.getInstance().getIsSeamlessLogin()) {
                        _context2.next = 4;
                        break;
                      }

                      _context2.next = 3;
                      return repeatRequest(endpoint, options);

                    case 3:
                      return _context2.abrupt("return", _context2.sent);

                    case 4:
                      return _context2.abrupt("return", null);

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, initRequest);
            }),
            beforeRequest: /*#__PURE__*/regeneratorRuntime.mark(function beforeRequest(dataProvider) {
              var jwtAccessToken, guestId;
              return regeneratorRuntime.wrap(function beforeRequest$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return getJwtAccessToken();

                    case 2:
                      jwtAccessToken = _context3.sent;

                      if (!jwtAccessToken) {
                        _context3.next = 7;
                        break;
                      }

                      dataProvider.addRequestOptions({
                        headers: {
                          Authorization: "Jwt ".concat(jwtAccessToken)
                        }
                      }, true);
                      _context3.next = 11;
                      break;

                    case 7:
                      _context3.next = 9;
                      return getGuestId();

                    case 9:
                      guestId = _context3.sent;

                      if (guestId) {
                        dataProvider.addRequestOptions({
                          headers: {
                            GuestId: guestId
                          }
                        }, true);
                      }

                    case 11:
                      dataProvider.addRequestOptions({
                        headers: FetchService.getInstance().getClientHeaders()
                      }, true);

                    case 12:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, beforeRequest);
            }),
            handleError: /*#__PURE__*/regeneratorRuntime.mark(function handleError(statusCode, resultError, dataProvider, resultEndpoint) {
              return regeneratorRuntime.wrap(function handleError$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return requestErrorHandler(statusCode, resultError, dataProvider, resultEndpoint, endpoint, options);

                    case 2:
                      return _context4.abrupt("return", _context4.sent);

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, handleError);
            }),
            requestConfig: requestConfig
          });

        case 2:
          result = _context5.sent;
          AuthService.getInstance().setSeamlessError(false);

          if (BUILD_TARGET === 'server') {
            FetchService.getInstance().setApiHeaders(result && result.response && result.response.headers);
          }

          return _context5.abrupt("return", result);

        case 6:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked);
}