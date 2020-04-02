import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { PROPERTIES_TYPES_ACTIONS } from 'modules/propertiesTypes/actionTypes'

export const PropertiesTypesActions = {
	view:   RequestActionHelper.getActionCreatorFetch(PROPERTIES_TYPES_ACTIONS.VIEW),
	list:   RequestActionHelper.getActionCreatorFetch(PROPERTIES_TYPES_ACTIONS.LIST),
	create: RequestActionHelper.getActionCreatorFetch(PROPERTIES_TYPES_ACTIONS.CREATE),
	update: RequestActionHelper.getActionCreatorFetch(PROPERTIES_TYPES_ACTIONS.UPDATE),
	delete: RequestActionHelper.getActionCreatorFetch(PROPERTIES_TYPES_ACTIONS.DELETE),
}
