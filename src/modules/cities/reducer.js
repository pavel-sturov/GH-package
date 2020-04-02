import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { CITY_ACTION } from 'modules/cities/actionTypes'

const ACTIONS = {
	...CITY_ACTION,
	[CITY_ACTION.LIST]: [CITY_ACTION.LIST, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))
