"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthApi = void 0;

var _api = require("api");

/**
 * Sign in
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function signIn(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)('/v1/customers/sign-in', searchQuery);
}
/**
 * Log out
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function logOut(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)('/v1/customers/logout', searchQuery);
}
/**
 * Renew auth token
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */


function renewToken(searchQuery) {
  searchQuery.addRequestOptions({
    method: 'POST'
  }, true);
  return (0, _api.callApi)('/v1/customers/renew-token', searchQuery);
}

var AuthApi = {
  signIn: signIn,
  logOut: logOut,
  renewToken: renewToken
};
exports.AuthApi = AuthApi;