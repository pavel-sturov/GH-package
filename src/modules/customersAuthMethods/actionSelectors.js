import { CUSTOMER_AUTH_METHOD_ACTIONS } from 'modules/customersAuthMethods/actionTypes'

export const CustomerAuthMethodSelectors = {
	list:   (state) => state.customersAuthMethods[CUSTOMER_AUTH_METHOD_ACTIONS.LIST],
	view:   (state) => state.customersAuthMethods[CUSTOMER_AUTH_METHOD_ACTIONS.VIEW],
	update: (state) => state.customersAuthMethods[CUSTOMER_AUTH_METHOD_ACTIONS.UPDATE],
}
