import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { NOTIFICATIONS_ACTIONS } from 'modules/customersNotifications/actionTypes'

const ACTIONS = {
	...NOTIFICATIONS_ACTIONS,
	[NOTIFICATIONS_ACTIONS.LIST]:       [NOTIFICATIONS_ACTIONS.LIST, DataProvider.getDefaultState()],
	[NOTIFICATIONS_ACTIONS.SMART_LIST]: [NOTIFICATIONS_ACTIONS.SMART_LIST, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))
