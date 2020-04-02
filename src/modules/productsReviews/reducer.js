import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { PRODUCTS_REVIEWS_ACTIONS } from 'modules/productsReviews/actionTypes'

const ACTIONS = {
	...PRODUCTS_REVIEWS_ACTIONS,
	[PRODUCTS_REVIEWS_ACTIONS.LIST]: [PRODUCTS_REVIEWS_ACTIONS.LIST, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))
