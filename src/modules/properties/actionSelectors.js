import { PROPERTIES_ACTIONS } from 'modules/properties/actionTypes'

export const PropertiesStateSelectors = {
	view:   (state) => state.properties.properties[PROPERTIES_ACTIONS.VIEW],
	list:   (state) => state.properties.properties[PROPERTIES_ACTIONS.LIST],
	create: (state) => state.properties.properties[PROPERTIES_ACTIONS.CREATE],
	update: (state) => state.properties.properties[PROPERTIES_ACTIONS.UPDATE],
	delete: (state) => state.properties.properties[PROPERTIES_ACTIONS.DELETE],
}
