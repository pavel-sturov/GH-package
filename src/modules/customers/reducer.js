import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { CUSTOMER_ACTIONS } from 'modules/customers/actionTypes'

const ACTIONS = {
	...CUSTOMER_ACTIONS,
	[CUSTOMER_ACTIONS.LIST]: [CUSTOMER_ACTIONS.LIST, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))
