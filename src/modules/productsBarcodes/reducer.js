import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { PRODUCTS_BARCODES_ACTIONS } from 'modules/productsBarcodes/actionTypes'

const ACTIONS = {
	...PRODUCTS_BARCODES_ACTIONS,
	[PRODUCTS_BARCODES_ACTIONS.LIST]: [PRODUCTS_BARCODES_ACTIONS.LIST, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))
