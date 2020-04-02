import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { CUSTOMER_ACTIONS } from 'modules/customers/actionTypes'

export const CustomerActions = {
	create:   RequestActionHelper.getActionCreatorFetch(CUSTOMER_ACTIONS.CREATE),
	view:     RequestActionHelper.getActionCreatorFetch(CUSTOMER_ACTIONS.VIEW),
	list:     RequestActionHelper.getActionCreatorFetch(CUSTOMER_ACTIONS.LIST),
	update:   RequestActionHelper.getActionCreatorFetch(CUSTOMER_ACTIONS.UPDATE),
	delete:   RequestActionHelper.getActionCreatorFetch(CUSTOMER_ACTIONS.DELETE),
	sendPush: RequestActionHelper.getActionCreatorFetch(CUSTOMER_ACTIONS.SEND_PUSH),
}
