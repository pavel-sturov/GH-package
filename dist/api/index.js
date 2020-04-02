"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJwtAccessToken = getJwtAccessToken;
exports.getRefreshToken = getRefreshToken;
exports.saveFirebaseToken = saveFirebaseToken;
exports.saveAuthTokens = saveAuthTokens;
exports.removeAuthTokens = removeAuthTokens;
exports.saveGuestId = saveGuestId;
exports.getGuestId = getGuestId;
exports.callApi = callApi;
exports.requestConfig = void 0;

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.array.from");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("regenerator-runtime/runtime");

require("core-js/modules/es6.promise");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.string.iterator");

var _api = require("@kakadu-dev/base-frontend-helpers/api");

var _Client = require("@kakadu-dev/base-frontend-helpers/helpers/Client");

var _Cookie = require("@kakadu-dev/base-frontend-helpers/helpers/Cookie");

var _AuthService = require("@kakadu-dev/base-frontend-helpers/services/AuthService");

var _FetchService = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/services/FetchService"));

var _config = require("config");

var _authHelpers = require("./authHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

/**
 * Get jwt access token
 *
 * @return {string}
 */
function getJwtAccessToken() {
  return (0, _Cookie.getCookie)('JwtAccessToken');
}
/**
 * Get jwt refresh token
 *
 * @return {string}
 */


function getRefreshToken() {
  return (0, _Cookie.getCookie)('JwtRefreshToken');
}
/**
 * Save firebase token
 *
 * @param {object} headers
 *
 * @return {Promise|boolean}
 */


function saveFirebaseToken(headers) {
  if (!headers || typeof headers.get !== 'function') {
    return false;
  }

  var token = headers.get('Firebase-Token');

  if (token) {
    return (0, _Cookie.setCookie)('FirebaseToken', token, true);
  }

  return false;
}
/**
 * Remove firebase token
 *
 * @return {Promise}
 */


function removeFirebaseToken() {
  return (0, _Cookie.deleteCookie)('FirebaseToken');
}
/**
 * Save auth tokens
 *
 * @param {object} headers
 *
 * @return {undefined}
 */


function saveAuthTokens(_x) {
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
            return _context6.abrupt("return", Promise.all([(0, _Cookie.setCookie)('JwtAccessToken', accessToken, true), (0, _Cookie.setCookie)('JwtRefreshToken', refreshToken, true)].concat(_toConsumableArray(_Client.TYPE === 'web' ? [(0, _Cookie.deleteCookie)('Guest-Id')] : []), [saveFirebaseToken(headers)])));

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee2);
  }));
  return _saveAuthTokens.apply(this, arguments);
}

function removeAuthTokens() {
  return Promise.all([(0, _Cookie.deleteCookie)('JwtAccessToken'), (0, _Cookie.deleteCookie)('JwtRefreshToken'), removeFirebaseToken()]);
}
/**
 * Save guest identity
 *
 * @param {Object} headers
 *
 * @return {boolean}
 */


function saveGuestId(headers) {
  if (!headers || typeof headers.get !== 'function') {
    return false;
  }

  var guestId = headers.get('Guest-Id');

  if (typeof guestId === 'string' && guestId.length > 0) {
    return (0, _Cookie.setCookie)('Guest-Id', guestId, true);
  }

  return true;
}
/**
 * Get guest identity
 *
 * @return {string | *}
 */


function getGuestId() {
  return (0, _Cookie.getCookie)('Guest-Id');
}
/**
 * Request config
 *
 * @type {object}
 */


var requestConfig = {
  domain: _config.API_URL,
  requestHeaders: _objectSpread({
    'Accept-Language': _config.LANGUAGE_CODE,
    'Client': _Client.TYPE,
    'ClientDevice': _Client.PLATFORM
  }, _config.ENVIRONMENT_DEV ? {
    'Cookie': 'XDEBUG_PROFILE="PHPSTORM"'
  } : {}, {}, _config.BUILD_TARGET === 'server' ? {
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
              if (!(_Client.TYPE === 'web')) {
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
              _AuthService.AuthService.getInstance().setSeamlessLogin(false).setSeamlessError(false);

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

exports.requestConfig = requestConfig;

function callApi(endpoint, options) {
  var result;
  return regeneratorRuntime.wrap(function callApi$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _api.callApi)(endpoint, options, {
            initRequest: /*#__PURE__*/regeneratorRuntime.mark(function initRequest() {
              return regeneratorRuntime.wrap(function initRequest$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!_AuthService.AuthService.getInstance().getIsSeamlessLogin()) {
                        _context2.next = 4;
                        break;
                      }

                      _context2.next = 3;
                      return (0, _authHelpers.repeatRequest)(endpoint, options);

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
                        headers: _FetchService["default"].getInstance().getClientHeaders()
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
                      return (0, _authHelpers.requestErrorHandler)(statusCode, resultError, dataProvider, resultEndpoint, endpoint, options);

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

          _AuthService.AuthService.getInstance().setSeamlessError(false);

          if (_config.BUILD_TARGET === 'server') {
            _FetchService["default"].getInstance().setApiHeaders(result && result.response && result.response.headers);
          }

          return _context5.abrupt("return", result);

        case 6:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked);
}