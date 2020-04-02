import { PROPERTIES_GROUPS_ACTIONS } from 'modules/propertiesGroups/actionTypes'

export const PropertiesGroupsStateSelectors = {
	view:   (state) => state.properties.propertiesGroups[PROPERTIES_GROUPS_ACTIONS.VIEW],
	list:   (state) => state.properties.propertiesGroups[PROPERTIES_GROUPS_ACTIONS.LIST],
	create: (state) => state.properties.propertiesGroups[PROPERTIES_GROUPS_ACTIONS.CREATE],
	update: (state) => state.properties.propertiesGroups[PROPERTIES_GROUPS_ACTIONS.UPDATE],
	delete: (state) => state.properties.propertiesGroups[PROPERTIES_GROUPS_ACTIONS.DELETE],
}
