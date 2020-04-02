import { COMPANIES_SETTINGS_ACTIONS } from "./actionTypes";
export var CompaniesSettingsSelectors = {
  view: function view(state) {
    return state.companiesSettings[COMPANIES_SETTINGS_ACTIONS.VIEW];
  },
  update: function update(state) {
    return state.companiesSettings[COMPANIES_SETTINGS_ACTIONS.UPDATE];
  }
};