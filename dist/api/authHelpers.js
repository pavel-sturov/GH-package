"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeatRequest = repeatRequest;
exports.seamlessLogin = seamlessLogin;
exports.renewToken = renewToken;
exports.requestErrorHandler = requestErrorHandler;

require("core-js/modules/es6.number.constructor");

require("regenerator-runtime/runtime");

var _api = require("@kakadu-dev/base-frontend-helpers/api");

var _DataProvider = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/DataProvider"));

var _AuthService = require("@kakadu-dev/base-frontend-helpers/services/AuthService");

var _effects = require("@redux-saga/core/effects");

var _auth = require("../modules/auth");

var _api2 = require("../modules/auth/api");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(repeatRequest),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(seamlessLogin),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(renewToken),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(requestErrorHandler);

/**
 * Repeat call api request
 * Wait done seamless login and run request
 *
 * @param {string} endpoint
 * @param {object} options
 * @param {number} attempts
 *
 * @return {IterableIterator<*>}
 */
function repeatRequest(endpoint, options) {
  var attempts,
      _args = arguments;
  return regeneratorRuntime.wrap(function repeatRequest$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          attempts = _args.length > 2 && _args[2] !== undefined ? _args[2] : 1;
          _context.next = 3;
          return (0, _effects.delay)(1500);

        case 3:
          if (!(_AuthService.AuthService.getInstance().getIsSeamlessLogin() && attempts < 5)) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", repeatRequest(endpoint, options, attempts + 1));

        case 5:
          if (!_AuthService.AuthService.getInstance().getSeamlessLoginError()) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", false);

        case 7:
          _context.next = 9;
          return (0, _index.callApi)(endpoint, options);

        case 9:
          return _context.abrupt("return", _context.sent);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Try seamless login (renew tokens) and repeat request
 *
 * @param {SearchQuery} dataProvider
 * @param {string} endpoint
 *
 * @return {object}
 */


function seamlessLogin(dataProvider, endpoint) {
  var refreshToken, dataProviderClean, result, headers;
  return regeneratorRuntime.wrap(function seamlessLogin$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _index.getRefreshToken)();

        case 2:
          refreshToken = _context2.sent;
          dataProvider.addRequestOptions({
            headers: {
              'Authorization-Refresh': refreshToken
            }
          }, true);
          dataProviderClean = dataProvider.cloneInstance().addCustomParams({
            saveAuth: true
          }, false);
          _context2.next = 7;
          return (0, _api.callApiEndpoint)(endpoint, dataProviderClean, _index.requestConfig);

        case 7:
          result = _context2.sent;
          // Check response headers
          headers = result && result.response && result.response.headers || null;

          if (!(result && result.error || !headers)) {
            _context2.next = 12;
            break;
          }

          result.error = true;
          return _context2.abrupt("return", result);

        case 12:
          return _context2.abrupt("return", result);

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * Try renew auth token and repeat request
 *
 * @param {SearchQuery} dataProvider
 * @param {string} endpoint
 *
 * @return {object}
 */


function renewToken(dataProvider, endpoint) {
  var renewSearchQuery, result, error, headers, dataProviderClean;
  return regeneratorRuntime.wrap(function renewToken$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.t0 = _DataProvider["default"].buildQuery();
          _context3.next = 3;
          return (0, _index.getRefreshToken)();

        case 3:
          _context3.t1 = _context3.sent;
          _context3.t2 = {
            'Authorization-Refresh': _context3.t1
          };
          _context3.t3 = {
            headers: _context3.t2
          };
          renewSearchQuery = _context3.t0.addRequestOptions.call(_context3.t0, _context3.t3, true).addCustomParams({
            saveAuth: true
          }, true);
          result = {};
          _context3.prev = 8;

          _AuthService.AuthService.getInstance().setSeamlessLogin(false);

          _context3.next = 12;
          return (0, _effects.call)(_api2.AuthApi.renewToken, renewSearchQuery);

        case 12:
          result = _context3.sent;
          _context3.next = 22;
          break;

        case 15:
          _context3.prev = 15;
          _context3.t4 = _context3["catch"](8);

          if (!(_context3.t4.messageData && _context3.t4.messageData.status === 401)) {
            _context3.next = 21;
            break;
          }

          error = {
            message: 'Ваша сессия истекла. Выполните вход заново.'
          };
          _context3.next = 21;
          return (0, _effects.put)(_auth.AuthActions.renewTokenError(renewSearchQuery.addReduxRequestParams({
            error: error
          })));

        case 21:
          result = {
            error: true,
            result: {
              code: _context3.t4.code,
              message: _context3.t4.message
            },
            response: {
              status: _context3.t4.messageData.status
            }
          };

        case 22:
          // Check response heeaders
          headers = result && result.response && result.response.headers || null;

          if (!(result && result.error || !headers)) {
            _context3.next = 26;
            break;
          }

          result.error = true;
          return _context3.abrupt("return", result);

        case 26:
          dataProviderClean = dataProvider.cloneInstance().addCustomParams({}, false);
          _context3.next = 29;
          return (0, _api.callApiEndpoint)(endpoint, dataProviderClean, _index.requestConfig);

        case 29:
          return _context3.abrupt("return", _context3.sent);

        case 30:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[8, 15]]);
}
/**
 * Handle request error
 *
 * @param {number} statusCode
 * @param {object} resultError
 * @param {SearchQuery} dataProvider
 * @param {string} endpoint
 * @param {object} options
 *
 * @return {IterableIterator<IterableIterator<*>|<"PUT", PutEffectDescriptor<*>>|*>}
 */


function requestErrorHandler(statusCode, resultError, dataProvider, endpoint, options) {
  var customParams, jwtAccessToken, seamlessResult, seamlessError, seamlessResponse, statusCode2, logOutSearchQuery;
  return regeneratorRuntime.wrap(function requestErrorHandler$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          customParams = dataProvider.getCustomParams();
          _context4.next = 3;
          return (0, _index.getJwtAccessToken)();

        case 3:
          jwtAccessToken = _context4.sent;

          if (!(statusCode === 401 && jwtAccessToken)) {
            _context4.next = 38;
            break;
          }

          if (!_AuthService.AuthService.getInstance().getIsSeamlessLogin()) {
            _context4.next = 9;
            break;
          }

          _context4.next = 8;
          return repeatRequest(endpoint, options);

        case 8:
          return _context4.abrupt("return", _context4.sent);

        case 9:
          _AuthService.AuthService.getInstance().setSeamlessLogin(true);

          if (!(customParams.externalRequest === true)) {
            _context4.next = 16;
            break;
          }

          _context4.next = 13;
          return renewToken(dataProvider, endpoint);

        case 13:
          _context4.t0 = _context4.sent;
          _context4.next = 19;
          break;

        case 16:
          _context4.next = 18;
          return seamlessLogin(dataProvider, endpoint);

        case 18:
          _context4.t0 = _context4.sent;

        case 19:
          seamlessResult = _context4.t0;
          seamlessError = seamlessResult.result, seamlessResponse = seamlessResult.response;

          _AuthService.AuthService.getInstance().setSeamlessLogin(false).setSeamlessError(seamlessResult && seamlessResult.error && true);

          if (!(seamlessResult && !seamlessResult.error)) {
            _context4.next = 24;
            break;
          }

          return _context4.abrupt("return", seamlessResult);

        case 24:
          // Update error data
          resultError.code = seamlessError && seamlessError.code;
          resultError.message = seamlessError && seamlessError.message;
          statusCode2 = seamlessResponse && Number(seamlessResponse.status) || 0; // Renew token false or seamless request false with status code 401

          if (!(statusCode2 === 401)) {
            _context4.next = 38;
            break;
          }

          logOutSearchQuery = _DataProvider["default"].buildQuery().setCallback(function () {
            // Reauth mobile app (anonymous)
            _AuthService.AuthService.getInstance().authCallback();
          });
          resultError.message = 'Авторизация истекла, войдите заново.';
          _context4.prev = 30;
          _context4.next = 33;
          return (0, _effects.put)(_auth.AuthActions.logOut(logOutSearchQuery));

        case 33:
          _context4.next = 38;
          break;

        case 35:
          _context4.prev = 35;
          _context4.t1 = _context4["catch"](30);
          resultError.message = 'Неизвестная ошибка авторизации. Обратитесь к администратору.'; // console.error(e)
          // clear error

        case 38:
          return _context4.abrupt("return", null);

        case 39:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[30, 35]]);
}