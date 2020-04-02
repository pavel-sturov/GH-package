import { PROPERTIES_TYPES_ACTIONS } from 'modules/propertiesTypes/actionTypes'

export const PropertiesTypesStateSelectors = {
	view:   (state) => state.properties.propertiesTypes[PROPERTIES_TYPES_ACTIONS.VIEW],
	list:   (state) => state.properties.propertiesTypes[PROPERTIES_TYPES_ACTIONS.LIST],
	create: (state) => state.properties.propertiesTypes[PROPERTIES_TYPES_ACTIONS.CREATE],
	update: (state) => state.properties.propertiesTypes[PROPERTIES_TYPES_ACTIONS.UPDATE],
	delete: (state) => state.properties.propertiesTypes[PROPERTIES_TYPES_ACTIONS.DELETE],
}
