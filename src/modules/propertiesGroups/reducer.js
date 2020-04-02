import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { PROPERTIES_GROUPS_ACTIONS } from 'modules/propertiesGroups/actionTypes'

const ACTIONS = {
	...PROPERTIES_GROUPS_ACTIONS,
	[PROPERTIES_GROUPS_ACTIONS.LIST]: [PROPERTIES_GROUPS_ACTIONS.LIST, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))
