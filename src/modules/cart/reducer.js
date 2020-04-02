import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import PersistHelper from 'helpers/Redux/PersistHelper'
import { CART_ACTION } from 'modules/cart/actionTypes'

const persistConfig = {
	key:       'cart',
	whitelist: [
		CART_ACTION.LIST,
	],
}

const ACTIONS = {
	...CART_ACTION,
	[CART_ACTION.LIST]: [CART_ACTION.LIST, DataProvider.getDefaultState()],
}

export default PersistHelper.persist(persistConfig, RequestActionHelper.createReducerActions(Object.values(ACTIONS)))
