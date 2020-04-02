import { COMPANIES_OFFERS_ACTIONS } from "./actionTypes";
export var CompaniesOffersSelectors = {
  list: function list(state) {
    return state.companiesOffers[COMPANIES_OFFERS_ACTIONS.LIST];
  },
  create: function create(state) {
    return state.companiesOffers[COMPANIES_OFFERS_ACTIONS.CREATE];
  },
  view: function view(state) {
    return state.companiesOffers[COMPANIES_OFFERS_ACTIONS.VIEW];
  },
  "delete": function _delete(state) {
    return state.companiesOffers[COMPANIES_OFFERS_ACTIONS.DELETE];
  },
  update: function update(state) {
    return state.companiesOffers[COMPANIES_OFFERS_ACTIONS.UPDATE];
  }
};