import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { COUNTRY_ACTION } from 'modules/countries/actionTypes'

const ACTIONS = {
	...COUNTRY_ACTION,
	[COUNTRY_ACTION.LIST]: [COUNTRY_ACTION.LIST, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))
