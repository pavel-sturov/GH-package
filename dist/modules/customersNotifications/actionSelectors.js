import { NOTIFICATIONS_ACTIONS } from "./actionTypes";
export var CustomerNotificationsSelectors = {
  list: function list(state) {
    return state.customersNotifications[NOTIFICATIONS_ACTIONS.LIST];
  },
  smartList: function smartList(state) {
    return state.customersNotifications[NOTIFICATIONS_ACTIONS.SMART_LIST];
  },
  view: function view(state) {
    return state.customersNotifications[NOTIFICATIONS_ACTIONS.VIEW];
  },
  update: function update(state) {
    return state.customersNotifications[NOTIFICATIONS_ACTIONS.UPDATE];
  }
};