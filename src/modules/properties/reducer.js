import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { PROPERTIES_ACTIONS } from 'modules/properties/actionTypes'

const ACTIONS = {
	...PROPERTIES_ACTIONS,
	[PROPERTIES_ACTIONS.LIST]: [PROPERTIES_ACTIONS.LIST, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))
