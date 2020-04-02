"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompaniesOffersSelectors = void 0;

var _actionTypes = require("./actionTypes");

var CompaniesOffersSelectors = {
  list: function list(state) {
    return state.companiesOffers[_actionTypes.COMPANIES_OFFERS_ACTIONS.LIST];
  },
  create: function create(state) {
    return state.companiesOffers[_actionTypes.COMPANIES_OFFERS_ACTIONS.CREATE];
  },
  view: function view(state) {
    return state.companiesOffers[_actionTypes.COMPANIES_OFFERS_ACTIONS.VIEW];
  },
  "delete": function _delete(state) {
    return state.companiesOffers[_actionTypes.COMPANIES_OFFERS_ACTIONS.DELETE];
  },
  update: function update(state) {
    return state.companiesOffers[_actionTypes.COMPANIES_OFFERS_ACTIONS.UPDATE];
  }
};
exports.CompaniesOffersSelectors = CompaniesOffersSelectors;