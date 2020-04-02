import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { CUSTOMER_AUTH_METHOD_ACTIONS } from 'modules/customersAuthMethods/actionTypes'

export const CustomerAuthMethodActions = {
	list:   RequestActionHelper.getActionCreatorFetch(CUSTOMER_AUTH_METHOD_ACTIONS.LIST),
	view:   RequestActionHelper.getActionCreatorFetch(CUSTOMER_AUTH_METHOD_ACTIONS.VIEW),
	update: RequestActionHelper.getActionCreatorFetch(CUSTOMER_AUTH_METHOD_ACTIONS.UPDATE),
}
