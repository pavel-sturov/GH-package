import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { COMPANIES_INVENTORY_ACTION } from 'modules/companiesInventory/actionTypes'

const ACTIONS = {
	...COMPANIES_INVENTORY_ACTION,
	[COMPANIES_INVENTORY_ACTION.PRODUCTS]: [COMPANIES_INVENTORY_ACTION.PRODUCTS, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))
