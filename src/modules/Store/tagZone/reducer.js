import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { TAG_ZONE_ACTIONS } from 'modules/Store/tagZone/actionTypes'

const ACTIONS = {
	...TAG_ZONE_ACTIONS,
	[TAG_ZONE_ACTIONS.LIST]: [TAG_ZONE_ACTIONS.LIST, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))
