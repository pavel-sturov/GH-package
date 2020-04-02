import { COMPANIES_SETTINGS_ACTIONS } from 'modules/companiesSettings/actionTypes'

export const CompaniesSettingsSelectors = {
	view:   (state) => state.companiesSettings[COMPANIES_SETTINGS_ACTIONS.VIEW],
	update: (state) => state.companiesSettings[COMPANIES_SETTINGS_ACTIONS.UPDATE],
}
