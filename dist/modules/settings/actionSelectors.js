import { SETTINGS_ACTION } from "./actionTypes";
export var SettingsStateSelectors = {
  listAvailable: function listAvailable(state) {
    return state.settings[SETTINGS_ACTION.LIST_AVAILABLE];
  },
  update: function update(state) {
    return state.settings[SETTINGS_ACTION.UPDATE];
  },
  list: function list(state) {
    return state.settings[SETTINGS_ACTION.LIST];
  },
  view: function view(state) {
    return state.settings[SETTINGS_ACTION.VIEW];
  }
};