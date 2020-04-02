"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersApi = void 0;

var _api = require("./api");

var _api2 = require("../cities/api");

var _api3 = require("../customers/api");

var _api4 = require("../customersSettings/api");

var UsersApi = {
  viewUser: _api3.CustomersApi.view,
  viewCurrentUser: function viewCurrentUser(searchQuery) {
    return (0, _api.callApi)("/v1/customers/current", searchQuery);
  },
  viewSettings: _api4.CustomersSettingsApi.view,
  updateUser: _api3.CustomersApi.update,
  updateSettings: _api4.CustomersSettingsApi.update,
  viewUserCity: _api2.CitiesApi.defaultCity
};
exports.UsersApi = UsersApi;