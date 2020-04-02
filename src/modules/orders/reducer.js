import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { ORDERS_ACTION } from 'modules/orders/actionTypes'

const ACTIONS = {
	...ORDERS_ACTION,
	[ORDERS_ACTION.LIST]: [ORDERS_ACTION.LIST, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))
