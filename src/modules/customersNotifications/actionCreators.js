import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { NOTIFICATIONS_ACTIONS } from 'modules/customersNotifications/actionTypes'

export const CustomerNotificationsActions = {
	list:         RequestActionHelper.getActionCreatorFetch(NOTIFICATIONS_ACTIONS.LIST),
	smartList:    RequestActionHelper.getActionCreatorFetch(NOTIFICATIONS_ACTIONS.SMART_LIST),
	setList:      RequestActionHelper.getActionCreatorSuccess(NOTIFICATIONS_ACTIONS.LIST),
	setSmartList: RequestActionHelper.getActionCreatorSuccess(NOTIFICATIONS_ACTIONS.SMART_LIST),
	view:         RequestActionHelper.getActionCreatorFetch(NOTIFICATIONS_ACTIONS.VIEW),
	update:       RequestActionHelper.getActionCreatorFetch(NOTIFICATIONS_ACTIONS.UPDATE),
}
