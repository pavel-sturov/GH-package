import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { CUSTOMER_ADDRESSES_ACTION } from 'modules/customersAddresses/actionTypes'

export const CustomerAddressesActions = {
	list:   RequestActionHelper.getActionCreatorFetch(CUSTOMER_ADDRESSES_ACTION.LIST),
	create: RequestActionHelper.getActionCreatorFetch(CUSTOMER_ADDRESSES_ACTION.CREATE),
	view:   RequestActionHelper.getActionCreatorFetch(CUSTOMER_ADDRESSES_ACTION.VIEW),
	delete: RequestActionHelper.getActionCreatorFetch(CUSTOMER_ADDRESSES_ACTION.DELETE),
	update: RequestActionHelper.getActionCreatorFetch(CUSTOMER_ADDRESSES_ACTION.UPDATE),
}
