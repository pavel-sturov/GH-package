import { CITY_ACTION } from "./actionTypes";
export var CitiesStateSelectors = {
  list: function list(state) {
    return state.cities[CITY_ACTION.LIST];
  },
  view: function view(state) {
    return state.cities[CITY_ACTION.VIEW];
  },
  create: function create(state) {
    return state.cities[CITY_ACTION.CREATE];
  },
  update: function update(state) {
    return state.cities[CITY_ACTION.UPDATE];
  }
};