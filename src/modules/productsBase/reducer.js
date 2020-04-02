import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { PRODUCTS_BASE_ACTIONS } from 'modules/productsBase/actionTypes'

const ACTIONS = {
	...PRODUCTS_BASE_ACTIONS,
	[PRODUCTS_BASE_ACTIONS.LIST]:                 [
		PRODUCTS_BASE_ACTIONS.LIST,
		DataProvider.getDefaultState(),
	],
	[PRODUCTS_BASE_ACTIONS.DIFFERENCE_ZONE_TAGS]: [
		PRODUCTS_BASE_ACTIONS.DIFFERENCE_ZONE_TAGS,
		DataProvider.getDefaultState(),
	],
	[PRODUCTS_BASE_ACTIONS.UPDATE_ALL]:           [
		PRODUCTS_BASE_ACTIONS.UPDATE_ALL,
		DataProvider.getDefaultState(),
	],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))
