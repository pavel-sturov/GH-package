import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { PRODUCTS_RELATIONS_ACTIONS } from 'modules/productsRelations/actionTypes'

const ACTIONS = {
	...PRODUCTS_RELATIONS_ACTIONS,
	[PRODUCTS_RELATIONS_ACTIONS.LIST]: [PRODUCTS_RELATIONS_ACTIONS.LIST, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))
