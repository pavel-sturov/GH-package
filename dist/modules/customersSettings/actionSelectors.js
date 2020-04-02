import { CUSTOMER_SETTINGS_ACTIONS } from "./actionTypes";
export var CustomersSettingsStateSelectors = {
  view: function view(state) {
    return state.customersSettings[CUSTOMER_SETTINGS_ACTIONS.VIEW];
  },
  update: function update(state) {
    return state.customersSettings[CUSTOMER_SETTINGS_ACTIONS.UPDATE];
  }
};