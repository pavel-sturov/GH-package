"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompaniesInventorySelectors = void 0;

var _actionTypes = require("./actionTypes");

var CompaniesInventorySelectors = {
  view: function view(state) {
    return state.companiesInventory[_actionTypes.COMPANIES_INVENTORY_ACTION.VIEW];
  },
  products: function products(state) {
    return state.companiesInventory[_actionTypes.COMPANIES_INVENTORY_ACTION.PRODUCTS];
  }
};
exports.CompaniesInventorySelectors = CompaniesInventorySelectors;