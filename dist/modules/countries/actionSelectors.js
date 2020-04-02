import { COUNTRY_ACTION } from "./actionTypes";
export var CountriesStateSelectors = {
  list: function list(state) {
    return state.countries[COUNTRY_ACTION.LIST];
  },
  view: function view(state) {
    return state.countries[COUNTRY_ACTION.VIEW];
  },
  update: function update(state) {
    return state.countries[COUNTRY_ACTION.UPDATE];
  },
  create: function create(state) {
    return state.countries[COUNTRY_ACTION.CREATE];
  }
};