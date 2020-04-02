import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { PROPERTIES_TYPES_ACTIONS } from 'modules/propertiesTypes/actionTypes'

const ACTIONS = {
	...PROPERTIES_TYPES_ACTIONS,
	[PROPERTIES_TYPES_ACTIONS.LIST]: [PROPERTIES_TYPES_ACTIONS.LIST, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))
