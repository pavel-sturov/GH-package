import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { CUSTOMER_AUTH_METHOD_ACTIONS } from 'modules/customersAuthMethods/actionTypes'

const ACTIONS = {
	...CUSTOMER_AUTH_METHOD_ACTIONS,
	[CUSTOMER_AUTH_METHOD_ACTIONS.LIST]: [CUSTOMER_AUTH_METHOD_ACTIONS.LIST, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))
