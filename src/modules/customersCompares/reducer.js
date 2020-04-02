import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { COMPARES_ACTION } from 'modules/customersCompares/actionTypes'

const ACTIONS = {
	...COMPARES_ACTION,
	[COMPARES_ACTION.LIST]: [COMPARES_ACTION.LIST, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))
