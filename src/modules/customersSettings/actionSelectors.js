import { CUSTOMER_SETTINGS_ACTIONS } from 'modules/customersSettings/actionTypes'

export const CustomersSettingsStateSelectors = {
	view:   (state) => state.customersSettings[CUSTOMER_SETTINGS_ACTIONS.VIEW],
	update: (state) => state.customersSettings[CUSTOMER_SETTINGS_ACTIONS.UPDATE],
}
