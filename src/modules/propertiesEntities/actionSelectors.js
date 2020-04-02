import { PROPERTIES_ENTITIES_ACTIONS } from 'modules/propertiesEntities/actionTypes'

export const PropertiesEntitiesStateSelectors = {
	view:   (state) => state.properties.propertiesEntities[PROPERTIES_ENTITIES_ACTIONS.VIEW],
	list:   (state) => state.properties.propertiesEntities[PROPERTIES_ENTITIES_ACTIONS.LIST],
	create: (state) => state.properties.propertiesEntities[PROPERTIES_ENTITIES_ACTIONS.CREATE],
	update: (state) => state.properties.propertiesEntities[PROPERTIES_ENTITIES_ACTIONS.UPDATE],
	delete: (state) => state.properties.propertiesEntities[PROPERTIES_ENTITIES_ACTIONS.DELETE],
}
