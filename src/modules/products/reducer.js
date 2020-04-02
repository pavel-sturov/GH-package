import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { PRODUCTS_ACTIONS } from 'modules/products/actionTypes'

const ACTIONS = {
	...PRODUCTS_ACTIONS,
	[PRODUCTS_ACTIONS.LIST]:   [PRODUCTS_ACTIONS.LIST, DataProvider.getDefaultState()],
	[PRODUCTS_ACTIONS.SEARCH]: [PRODUCTS_ACTIONS.SEARCH, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))
