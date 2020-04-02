import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { PROPERTIES_GROUPS_ACTIONS } from 'modules/propertiesGroups/actionTypes'

export const PropertiesGroupsActions = {
	view:   RequestActionHelper.getActionCreatorFetch(PROPERTIES_GROUPS_ACTIONS.VIEW),
	list:   RequestActionHelper.getActionCreatorFetch(PROPERTIES_GROUPS_ACTIONS.LIST),
	create: RequestActionHelper.getActionCreatorFetch(PROPERTIES_GROUPS_ACTIONS.CREATE),
	update: RequestActionHelper.getActionCreatorFetch(PROPERTIES_GROUPS_ACTIONS.UPDATE),
	delete: RequestActionHelper.getActionCreatorFetch(PROPERTIES_GROUPS_ACTIONS.DELETE),
}
