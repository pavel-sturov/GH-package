import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { TAG_ZONE_ACTIONS } from 'modules/Store/tagZone/actionTypes'

export const TagZoneActions = {
	list:       RequestActionHelper.getActionCreatorFetch(TAG_ZONE_ACTIONS.LIST),
	create:     RequestActionHelper.getActionCreatorFetch(TAG_ZONE_ACTIONS.CREATE),
	view:       RequestActionHelper.getActionCreatorFetch(TAG_ZONE_ACTIONS.VIEW),
	delete:     RequestActionHelper.getActionCreatorFetch(TAG_ZONE_ACTIONS.DELETE),
	update:     RequestActionHelper.getActionCreatorFetch(TAG_ZONE_ACTIONS.UPDATE),
	clearZones: RequestActionHelper.getActionCreatorFetch(TAG_ZONE_ACTIONS.CLEAR_ZONES),
}
