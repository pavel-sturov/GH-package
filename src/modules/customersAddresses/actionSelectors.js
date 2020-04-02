import { CUSTOMER_ADDRESSES_ACTION } from 'modules/customersAddresses/actionTypes'

export const CustomerAddressesSelectors = {
	list:   (state) => state.customersAddresses[CUSTOMER_ADDRESSES_ACTION.LIST],
	create: (state) => state.customersAddresses[CUSTOMER_ADDRESSES_ACTION.CREATE],
	view:   (state) => state.customersAddresses[CUSTOMER_ADDRESSES_ACTION.VIEW],
	delete: (state) => state.customersAddresses[CUSTOMER_ADDRESSES_ACTION.DELETE],
	update: (state) => state.customersAddresses[CUSTOMER_ADDRESSES_ACTION.UPDATE],
}
