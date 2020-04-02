import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { COMPANIES_OFFERS_ACTIONS } from 'modules/companiesOffers/actionTypes'

const ACTIONS = {
	...COMPANIES_OFFERS_ACTIONS,
	[COMPANIES_OFFERS_ACTIONS.LIST]: [COMPANIES_OFFERS_ACTIONS.LIST, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))
