import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { FAVORITE_ACTION } from 'modules/customersFavorites/actionTypes'

const ACTIONS = {
	...FAVORITE_ACTION,
	[FAVORITE_ACTION.LIST]: [FAVORITE_ACTION.LIST, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))
