import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { COMPANIES_ACTION } from 'modules/companies/actionTypes'

const ACTIONS = {
	...COMPANIES_ACTION,
	[COMPANIES_ACTION.LIST]: [COMPANIES_ACTION.LIST, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))
