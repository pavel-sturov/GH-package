import { REPORTS_ACTIONS } from "./actionTypes";
export var ReportsStateSelectors = {
  view: function view(state) {
    return state.reports[REPORTS_ACTIONS.VIEW];
  },
  generate: function generate(state) {
    return state.reports[REPORTS_ACTIONS.GENERATE];
  }
};