import { USER_ACTION } from "./actionTypes";
export var UsersStateSelectors = {
  getUser: function getUser(state) {
    return state.user[USER_ACTION.USER];
  },
  getUserCity: function getUserCity(state) {
    return state.user[USER_ACTION.USER_CITY];
  },
  getUserSettings: function getUserSettings(state) {
    return state.user[USER_ACTION.USER_SETTINGS];
  },
  updateUserFields: function updateUserFields(state) {
    return state.user[USER_ACTION.UPDATE_USER_FIELDS];
  },
  updateUserSettings: function updateUserSettings(state) {
    return state.user[USER_ACTION.UPDATE_USER_SETTINGS];
  },
  updateMainUserInfo: function updateMainUserInfo(state) {
    return state.user[USER_ACTION.UPDATE_MAIN_USER_INFO];
  }
};