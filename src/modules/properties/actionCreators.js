import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { PROPERTIES_ACTIONS } from 'modules/properties/actionTypes'

export const PropertiesActions = {
	view:   RequestActionHelper.getActionCreatorFetch(PROPERTIES_ACTIONS.VIEW),
	list:   RequestActionHelper.getActionCreatorFetch(PROPERTIES_ACTIONS.LIST),
	create: RequestActionHelper.getActionCreatorFetch(PROPERTIES_ACTIONS.CREATE),
	update: RequestActionHelper.getActionCreatorFetch(PROPERTIES_ACTIONS.UPDATE),
	delete: RequestActionHelper.getActionCreatorFetch(PROPERTIES_ACTIONS.DELETE),
}
