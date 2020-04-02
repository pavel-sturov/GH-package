import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { CATEGORY_ACTION } from 'modules/categories/actionTypes'

const ACTIONS = {
	...CATEGORY_ACTION,
	[CATEGORY_ACTION.LIST]: [CATEGORY_ACTION.LIST, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))
