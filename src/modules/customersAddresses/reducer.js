import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { CUSTOMER_ADDRESSES_ACTION } from 'modules/customersAddresses/actionTypes'

const ACTIONS = {
	...CUSTOMER_ADDRESSES_ACTION,
	[CUSTOMER_ADDRESSES_ACTION.LIST]: [CUSTOMER_ADDRESSES_ACTION.LIST, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))
