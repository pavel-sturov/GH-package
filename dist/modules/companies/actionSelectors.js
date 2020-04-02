import { COMPANIES_ACTION } from "./actionTypes";
export var CompaniesSelectors = {
  list: function list(state) {
    return state.companies[COMPANIES_ACTION.LIST];
  },
  create: function create(state) {
    return state.companies[COMPANIES_ACTION.CREATE];
  },
  view: function view(state) {
    return state.companies[COMPANIES_ACTION.VIEW];
  },
  "delete": function _delete(state) {
    return state.companies[COMPANIES_ACTION.DELETE];
  },
  update: function update(state) {
    return state.companies[COMPANIES_ACTION.UPDATE];
  }
};