import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { LOGS_ACTION } from 'modules/logs/actionTypes'

const ACTIONS = {
	...LOGS_ACTION,
	[LOGS_ACTION.LIST]: [LOGS_ACTION.LIST, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))
