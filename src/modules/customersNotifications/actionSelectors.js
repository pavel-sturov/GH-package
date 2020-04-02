import { NOTIFICATIONS_ACTIONS } from 'modules/customersNotifications/actionTypes'

export const CustomerNotificationsSelectors = {
	list:      (state) => state.customersNotifications[NOTIFICATIONS_ACTIONS.LIST],
	smartList: (state) => state.customersNotifications[NOTIFICATIONS_ACTIONS.SMART_LIST],
	view:      (state) => state.customersNotifications[NOTIFICATIONS_ACTIONS.VIEW],
	update:    (state) => state.customersNotifications[NOTIFICATIONS_ACTIONS.UPDATE],
}
