import { TAG_ZONE_ACTIONS } from 'modules/Store/tagZone/actionTypes'

export const TagZoneSelectors = {
	list:       (state) => state.modules.tagZone[TAG_ZONE_ACTIONS.LIST],
	create:     (state) => state.modules.tagZone[TAG_ZONE_ACTIONS.CREATE],
	view:       (state) => state.modules.tagZone[TAG_ZONE_ACTIONS.VIEW],
	delete:     (state) => state.modules.tagZone[TAG_ZONE_ACTIONS.DELETE],
	update:     (state) => state.modules.tagZone[TAG_ZONE_ACTIONS.UPDATE],
	clearZones: (state) => state.modules.tagZone[TAG_ZONE_ACTIONS.CLEAR_ZONES],
}
