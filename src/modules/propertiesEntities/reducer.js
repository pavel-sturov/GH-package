import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { PROPERTIES_ENTITIES_ACTIONS } from 'modules/propertiesEntities/actionTypes'

const ACTIONS = {
	...PROPERTIES_ENTITIES_ACTIONS,
	[PROPERTIES_ENTITIES_ACTIONS.LIST]: [PROPERTIES_ENTITIES_ACTIONS.LIST, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))
