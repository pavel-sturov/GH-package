import { SETTINGS_ACTION } from 'modules/settings/actionTypes'

export const SettingsStateSelectors = {
	listAvailable: (state) => state.settings[SETTINGS_ACTION.LIST_AVAILABLE],
	update:        (state) => state.settings[SETTINGS_ACTION.UPDATE],
	list:          (state) => state.settings[SETTINGS_ACTION.LIST],
	view:          (state) => state.settings[SETTINGS_ACTION.VIEW],
}
