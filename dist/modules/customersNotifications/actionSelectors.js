"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomerNotificationsSelectors = void 0;

var _actionTypes = require("./actionTypes");

var CustomerNotificationsSelectors = {
  list: function list(state) {
    return state.customersNotifications[_actionTypes.NOTIFICATIONS_ACTIONS.LIST];
  },
  smartList: function smartList(state) {
    return state.customersNotifications[_actionTypes.NOTIFICATIONS_ACTIONS.SMART_LIST];
  },
  view: function view(state) {
    return state.customersNotifications[_actionTypes.NOTIFICATIONS_ACTIONS.VIEW];
  },
  update: function update(state) {
    return state.customersNotifications[_actionTypes.NOTIFICATIONS_ACTIONS.UPDATE];
  }
};
exports.CustomerNotificationsSelectors = CustomerNotificationsSelectors;