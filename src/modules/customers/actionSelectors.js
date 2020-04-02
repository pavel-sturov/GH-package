import { CUSTOMER_ACTIONS } from 'modules/customers/actionTypes'

export const CustomersStateSelectors = {
	create:   (state) => state.customers[CUSTOMER_ACTIONS.CREATE],
	view:     (state) => state.customers[CUSTOMER_ACTIONS.VIEW],
	list:     (state) => state.customers[CUSTOMER_ACTIONS.LIST],
	update:   (state) => state.customers[CUSTOMER_ACTIONS.UPDATE],
	delete:   (state) => state.customers[CUSTOMER_ACTIONS.DELETE],
	sendPush: (state) => state.customers[CUSTOMER_ACTIONS.SEND_PUSH],
}
